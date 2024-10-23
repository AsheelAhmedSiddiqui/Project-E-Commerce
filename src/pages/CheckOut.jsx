import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import MyHeader from "../components/Header";
import Footer from "../components/Footer";
import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import { auth, db } from "../firebase utils";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export default function CheckOut() {
	const { cart, clearCart } = useContext(CartContext);
	const [fName, setFName] = useState("");
	const [LName, setLName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [loading, setLoading] = useState(false);
	const user = auth.currentUser;
	const navigate = useNavigate();
	// console.log([cart]);

	const totalItemsQuantity = cart.reduce(
		(value, items) => value + items.quantity,
		0
	);
	const totalItemsPrice = cart.reduce(
		(value, items) => value + items.quantity * items.price,
		0
	);

	async function handleOrder() {
		setLoading(true);
		try {
			const docRef = await addDoc(collection(db, "orders"), {
				userName: fName + LName,
				userID: user.uid,
				phone: phone,
				email: email,
				address: address,
				totalItemsPrice: totalItemsPrice,
				totalItemsQuantity: totalItemsQuantity,
				items: cart,
				status: "Pending",
				orderAt: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
			});
			console.log("Document written with ID: ", docRef.id);
			await setDoc(doc(db, "orders", docRef.id), {
				orderID: docRef.id,
				userID: user.uid,
				userName: fName + LName,
				phone: phone,
				email: email,
				address: address,
				totalItemsPrice: totalItemsPrice,
				totalItemsQuantity: totalItemsQuantity,
				items: cart,
				status: "Pending",
				orderAt: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
			});
			clearCart();
			setTimeout(() => {
				setLoading(false);
				navigate("/myorders");
			}, 5000);
		} catch (e) {
			setLoading(false);
			console.error("Error adding document: ", e);
			alert(e);
		}
	}

	return (
		<>
			<MyHeader />
			<div className="container w-[1000px] mx-auto my-[50px]">
				<div className="grid grid-cols-3 mt-16 gap-4">
					<div className="checkout-form col-span-2 shadow-lg border">
						<h1 className="text-2xl font-medium text-warning-500 py-4 px-6 mb-4">
							Check Out
						</h1>
						<form className="w-[600px] flex flex-col gap-4 mx-auto">
							<div className="flex gap-4 items-center">
								<Input
									isClearable
									color="warning"
									placeholder="First Name"
									type="text"
									variant="bordered"
									onChange={(e) => setFName(e.target.value)}
								/>
								<Input
									color="warning"
									placeholder="Last Name"
									type="text"
									variant="bordered"
									isClearable
									onChange={(e) => setLName(e.target.value)}
								/>
							</div>
							<div className="flex gap-4 items-center">
								<Input
									color="warning"
									placeholder="Phone Number"
									type="number"
									variant="bordered"
									isClearable
									onChange={(e) => setPhone(e.target.value)}
								/>
								<Input
									color="warning"
									placeholder="Email"
									type="email"
									variant="bordered"
									isClearable
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<Textarea
									color="warning"
									placeholder="Street Address"
									variant="bordered"
									onChange={(e) => setAddress(e.target.value)}
								></Textarea>
							</div>

							<Button
								className="rounded font-medium text-lg mt-4 mb-10"
								color="warning"
								onClick={handleOrder}
							>
								{loading ? <Spinner color="white" /> : "Place Order"}
							</Button>
						</form>
					</div>
					<div className="checkout-Deatils shadow-lg border">
						<h1 className="py-3 px-4 bg-warning-500 text-lg font-medium text-center">
							Your Order
						</h1>
						<div className="py-2 px-4">
							<div className="flex items-center justify-between p-2">
								<h3 className="font-bold">Product</h3>
								<h3 className="font-bold">Quantities</h3>
								<h3 className="font-bold">Sub Total</h3>
							</div>
							<hr className="border-black" />
							{cart.map((items) => (
								<div
									key={items.id}
									className="flex items-center justify-between p-2"
								>
									<h3 className="font-medium">
										{items.productName.slice(0, 10) + "..."}
									</h3>
									<h3 className="font-medium">{items.quantity}</h3>
									<h3 className="font-medium">
										${items.quantity * items.price}
									</h3>
								</div>
							))}
							<hr className="mt-6" />
							<div className="flex items-center justify-between p-2">
								<h3 className="font-medium">Total Items Quantity</h3>
								<h3 className="font-medium">{totalItemsQuantity}</h3>
							</div>
							<hr />
							<div className="flex items-center justify-between p-2 mb-8">
								<h3 className="font-medium">Sub Total</h3>
								<h3 className="font-medium">${totalItemsPrice}</h3>
							</div>
							<hr />
							<div className="flex items-center justify-between p-2">
								<h3 className="font-medium">Grand Total</h3>
								<h3 className="font-medium">${Math.round(totalItemsPrice)}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
