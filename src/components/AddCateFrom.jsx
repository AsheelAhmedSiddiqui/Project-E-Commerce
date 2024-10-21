import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import { db } from "../firebase utils";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddCateForm() {
	const [cateName, setCateName] = useState("");
	const [cateDescription, setCateDescription] = useState("");
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
	// console.log(cateName, cateDescription);
	const date = new Date().getDate();
	const month = new Date().getMonth();
	const year = new Date().getFullYear();
	// console.log(`${date}-${monthArr[month]}-${year} `);
	const hour = new Date().getHours();
	const min = new Date().getMinutes();
	const sec = new Date().getSeconds();

	async function handleAddCate() {
		setLoading(true);
		try {
			const docRef = await addDoc(collection(db, "categories"), {
				categoryName: cateName,
				categoryDescription: cateDescription,
				isActive: true,
				createdAt: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
			});
			await setDoc(doc(db, "categories", docRef.id), {
				id: docRef.id,
				categoryName: cateName,
				categoryDescription: cateDescription,
				isActive: true,
				createdAt: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
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
		<div className="mx-auto mt-16">
			<form className=" flex flex-col gap-3 justify-center items-center py-8 shadow-2xl w-[650px] border rounded-md ">
				<h1 className="text-2xl text-center font-medium mb-4">Add Category</h1>
				<Input
					type="text"
					placeholder="Enter Category Name"
					label="Category Name"
					color="warning"
					variant="bordered"
					className="w-[70%]"
					onChange={(e) => setCateName(e.target.value)}
				/>
				<Textarea
					type="text"
					placeholder="Enter Category Descripiton"
					label="Category Descripiton"
					color="warning"
					variant="bordered"
					className="w-[70%]"
					onChange={(e) => setCateDescription(e.target.value)}
				/>
				<Button
					onClick={handleAddCate}
					color="warning"
					className="text-lg font-medium w-[300px] py-7"
				>
					{loading ? <Spinner color="default" /> : "Add Category"}
				</Button>
			</form>
		</div>
	);
}
