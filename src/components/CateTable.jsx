import {
	BreadcrumbItem,
	Breadcrumbs,
	Button,
	Spinner,
	Switch,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CateTable() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Real-time listener for categories collection
		setLoading(true);
		const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
			const categoriesList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setCategories(categoriesList);
			setLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);

	// function handleDelete () {
	// 	Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis at asperiores
	// }

	return (
		<div className="flex flex-col w-[1000px] mx-auto my-8">
			<div className=" flex justify-between items-center mx-2">
				<div>
					<Breadcrumbs>
						<BreadcrumbItem>
							<Link to={"/dashboard"}>
								<span className="hover:text-gray-400 hover:underline ">
									Dashboard
								</span>
							</Link>
						</BreadcrumbItem>
						<BreadcrumbItem>Categories</BreadcrumbItem>
					</Breadcrumbs>
				</div>
				<Button className="text-lg font-medium text-white" color="warning">
					<Link to={"/dashboard/categories/addcategory"}>Add Category</Link>
				</Button>
			</div>
			<Table
				aria-label="Example static collection table"
				className="w-[1000px] mx-auto my-4"
			>
				<TableHeader>
					<TableColumn className="bg-warning-500 text-white">
						CATEGORY NAME
					</TableColumn>
					<TableColumn className="bg-warning-500 text-white">
						CREATED AT
					</TableColumn>
					<TableColumn className="bg-warning-500 text-white">
						CATEGORY DESCRIPITON
					</TableColumn>
					<TableColumn className="bg-warning-500 text-white">
						STATUS
					</TableColumn>
				</TableHeader>
				<TableBody>
					{loading ? (
						<TableRow>
							<TableCell>
								<Spinner color="warning" />
							</TableCell>
							<TableCell>
								<Spinner color="warning" />
							</TableCell>
							<TableCell>
								<Spinner color="warning" />
							</TableCell>
							<TableCell>
								<Spinner color="warning" />
							</TableCell>
						</TableRow>
					) : (
						categories.map((category) => (
							<TableRow key={category.id}>
								<TableCell>{category?.categoryName}</TableCell>
								<TableCell>{category?.createdAt}</TableCell>
								<TableCell>
									{category?.categoryDescription.slice(0, 30) + "...."}
								</TableCell>
								<TableCell>
									{
										<Switch
											startContent={<FontAwesomeIcon icon={faCheck} />}
											endContent={<FontAwesomeIcon icon={faXmark} />}
											color="success"
											isSelected={category?.isActive}
										/>
									}
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
}
