import { useParams } from "react-router-dom";
import { reviews } from "../mockData";
import MyHeader from "./Header";
import Footer from "./Footer";
import { Button, Image, Spinner } from "@nextui-org/react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase utils";
import { CartContext } from "../context/CartContext";

export default function SingleProduct() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { addToCart, isAdded } = useContext(CartContext);
  const { id } = useParams();

  //   console.log(addToCart, isAdded);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "products", id); // Collection ka naam aur product ID

    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          setError("No such document!");
        }
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        setError("Error fetching document: " + err.message);
      }
    );

    // Cleanup function
    return () => unsubscribe();
  }, [id]);

  // const [carts, setCarts] = useState([]);

  if (!product) {
    return (
      <>
        <MyHeader />
        <div className="flex items-center justify-center text-4xl h-screen font-semibold">
          Product Not Found
        </div>
        <Footer />
      </>
    );
  }

  // console.log(cartItems, product);
  return (
    <>
      <MyHeader />
      <div className="max-w-4xl mx-auto p-6">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <Spinner
              color="warning"
              label="Product Loading..."
              className="text-2xl font-medium"
              size="lg"
            />
          </div>
        ) : (
          <div>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Product Image */}
              <div className="md:w-1/2">
                <Image
                  isZoomed
                  src={product.imageURL || "default-image.jpg"}
                  alt={product.productName}
                  className="rounded-lg shadow-md object-cover w-full h-64 md:h-auto"
                />
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4">
                  {product.productName}
                </h1>
                <p className="text-xl text-gray-600 mb-4">${product.price}</p>
                <p className="mb-4 text-gray-700">
                  <strong>Category:</strong> {product.productCategory}
                </p>
                <p className="mb-6 text-gray-700">
                  {product.productDescription || "No description available."}
                </p>

                {/* Add to Cart Button */}
                <Button
                  color="warning"
                  onClick={() => addToCart(product)}
                  startContent={<FontAwesomeIcon icon={faCartShopping} />}
                  className="text-white text-lg py-2 px-4 rounded transition"
                >
                  {isAdded(product.id)
                    ? `Added (${isAdded(product.id).quantity})`
                    : "Add to Cart"}
                </Button>
              </div>
            </div>

            <div className="max-w-6xl mx-auto p-6 my-12 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Customer Reviews
              </h2>

              {/* Review List */}
              <div className="space-y-4">
                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 p-4 rounded-lg shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{review.customerName}</h3>
                        <span className="text-yellow-500">
                          {"★".repeat(review.rating)}
                        </span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No reviews yet.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
