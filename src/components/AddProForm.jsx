import {
	Button,
	Image,
	Input,
	Select,
	SelectItem,
	Spinner,
	Textarea,
} from "@nextui-org/react";
import {
	addDoc,
	collection,
	doc,
	onSnapshot,
	setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firebase utils";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function AddProForm() {
	const [proName, setProName] = useState("");
	const [proDescription, setProDescription] = useState("");
	const [price, setPrice] = useState("");
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState("");
	const [image, setImage] = useState(null);
	const [fileName, setFileName] = useState("No selected file");
	const [stock, setStock] = useState("");
	const [loading, setLoading] = useState(false);
	const [cateLoading, setCateLoading] = useState(false);
	const navigate = useNavigate();
	const user = auth.currentUser;

	useEffect(() => {
		// Real-time listener for categories collection
		setCateLoading(true);
		const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
			const categoriesList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setCategories(categoriesList);
			setCateLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);

	const random = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
	// console.log(random);

	async function handleAddPro() {
		setLoading(true);
		const imagesRef = ref(storage, "images/" + random);
		uploadBytes(imagesRef, fileName).then((user) => {
			console.log("Uploaded a blob or file!");
			getDownloadURL(imagesRef)
				.then(async (url) => {
					console.log("url aagaya==> " + url);

					try {
						const docRef = await addDoc(collection(db, "products"), {
							productName: proName,
							productDescription: proDescription,
							price: price,
							productCategory: category,
							imageURL: url,
							stock: stock,
							isActive: true,
							createdAt: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
						});
						console.log("Document written with ID: ", docRef.id);
						await setDoc(doc(db, "products", docRef.id), {
							id: docRef.id,
							productName: proName,
							productDescription: proDescription,
							price: price,
							productCategory: category,
							imageURL: url,
							stock: stock,
							isActive: true,
							createdAt: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
						});
						setLoading(false);
						navigate("/dashboard/products");
					} catch (e) {
						setLoading(false);
						console.error("Error adding document: ", e);
						alert(e);
					}
				})
				.catch((err) => {
					setLoading(false);
					console.log(err);
					alert(err);
				});
		});
	}
	return (
		<div className="my-12 mx-auto">
			<form className=" flex flex-col gap-3 justify-center items-center py-8 shadow-2xl w-[650px] border rounded ">
				<h1 className="text-xl text-center font-medium mb-4">Add Product</h1>
				<Input
					type="text"
					placeholder="Enter Product Name"
					label="Product Name"
					color="warning"
					variant="bordered"
					className="w-[70%]"
					onChange={(e) => setProName(e.target.value)}
				/>
				<Input
					type="number"
					placeholder="Enter Product Price"
					label="Price"
					color="warning"
					variant="bordered"
					className="w-[70%]"
					onChange={(e) => setPrice(e.target.value)}
				/>
				<Input
					type="number"
					placeholder="Enter Product Stock"
					label="Product Stock"
					color="warning"
					variant="bordered"
					className="w-[70%]"
					onChange={(e) => setStock(e.target.value)}
				/>
				<Select
					placeholder="Select Category"
					label="Select Category"
					color="warning"
					variant="bordered"
					className="w-[70%]"
					onChange={(e) => setCategory(e.target.value)}
				>
					{cateLoading ? (
						<SelectItem>
							<Spinner color="warning" />
						</SelectItem>
					) : (
						categories.map((data) => (
							<SelectItem value={data.categoryName} key={data.categoryName}>
								{data.categoryName}
							</SelectItem>
						))
					)}
				</Select>
				<Textarea
					placeholder="Enter Product Description"
					label="Product Description"
					color="warning"
					variant="bordered"
					className="w-[70%]"
					onChange={(e) => setProDescription(e.target.value)}
				/>
				<div className="w-[70%] image flex gap-2">
					<Input
						type="file"
						placeholder="Enter Product Name"
						accept="image/*"
						onChange={(e) => {
							setFileName(e.target.files[0]);
							setImage(URL.createObjectURL(e.target.files[0]));
						}}
						label="Product Image"
						labelPlacement="inside"
						color="warning"
						variant="bordered"
						className="w-[70%]"
					/>
					<div className="show-image border w-32 h-32 flex items-center justify-center rounded">
						<Image src={image} className="w-28 h-28" />
					</div>
				</div>
				<Button
					onClick={handleAddPro}
					color="warning"
					className="py-6 px-6 w-[40%] text-lg font-medium text-white mt-4"
				>
					{loading ? <Spinner color="default" /> : "Add Product"}
				</Button>
			</form>
		</div>
	);
}
