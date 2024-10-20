import {
	Button,
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
import { db } from "../firebase utils";

export default function AddProForm() {
	const [proName, setProName] = useState("");
	const [proDescription, setProDescription] = useState("");
	const [price, setPrice] = useState("");
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState("");
	const [imageURL, setImageURL] = useState("");
	const [stock, setStock] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const monthArr = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const date = new Date().getDate();
	const month = new Date().getMonth();
	const year = new Date().getFullYear();
	const hour = new Date().getHours();
	const min = new Date().getMinutes();
	const sec = new Date().getSeconds();

	/*
	"id": "103",
	"name": "Leather Sofa",
	"category": "Living",
	"price": 25000,
	"description": "Luxurious leather sofa that adds a premium touch to your living room.",
	"imageUrl": "https://example.com/leather-sofa.jpg",
	"stock": 5
	*/

	useEffect(() => {
		// Real-time listener for categories collection
		const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
			const categoriesList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setCategories(categoriesList);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);

	async function handleAddPro() {
		setLoading(true);
		try {
			const docRef = await addDoc(collection(db, "products"), {
				productName: proName,
				productDescription: proDescription,
				price: price,
				productCategory: category,
				imageURL: imageURL,
				stock: stock,
				isActive: true,
				createdAt: `${date}-${monthArr[month]}-${year}`,
				updatedAt: `${hour}:${min}:${sec}`,
			});
			await setDoc(doc(db, "products", docRef.id), {
				id: docRef.id,
				categoryName: cateName,
				categoryDescription: cateDescription,
				isActive: true,
				createdAt: `${date}-${monthArr[month]}-${year}`,
				updatedAt: `${hour}:${min}:${sec}`,
			});
			navigate("/dashboard/categories");
			console.log("Document written with ID: ", docRef.id);
			setLoading(false);
		} catch (e) {
			console.error("Error adding document: ", e);
			alert(e);
		}
	}
	return (
		<div className="my-16 mx-auto">
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
					{categories.map((data) => (
						<SelectItem key={data.id}>{data.categoryName}</SelectItem>
					))}
				</Select>
				<Input
					type="file"
					placeholder="Enter Product Name"
					label="Product Image"
					labelPlacement="inside"
					color="warning"
					variant="bordered"
					className="w-[70%]"
				/>
				<Textarea
					placeholder="Enter Product Description"
					label="Product Description"
					color="warning"
					variant="bordered"
					className="w-[70%]"
					onChange={(e) => setProDescription(e.target.value)}
				/>
				<Button color="warning">
					{loading ? (
						"Add Product"
					) : (
						<Spinner label="Loading..." color="warning" />
					)}
				</Button>
			</form>
		</div>
	);
}
