import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase utils";

export default function ProTable() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Real-time listener for categories collection
		setLoading(true);
		const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
			const productList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setProducts(productList);
			setLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);
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
						<BreadcrumbItem>
							<span>Products</span>
						</BreadcrumbItem>
					</Breadcrumbs>
				</div>
				<Button className="text-lg font-medium text-white" color="warning">
					<Link to={"/dashboard/products/addproducts"}>Add Product</Link>
				</Button>
			</div>
			<Table
				aria-label="Example static collection table"
				className="w-[1000px] mx-auto my-6"
			>
				<TableHeader>
					<TableColumn className="bg-warning-500 text-white">IMAGE</TableColumn>
					<TableColumn className="bg-warning-500 text-white">
						PRODUCT NAME
					</TableColumn>
					<TableColumn className="bg-warning-500 text-white">PRICE</TableColumn>
					<TableColumn className="bg-warning-500 text-white">
						CREATED AT
					</TableColumn>
					<TableColumn className="bg-warning-500 text-white">
						PRODUCT DESCRIPTION
					</TableColumn>
					<TableColumn className="bg-warning-500 text-white">
						PRODUCT CATEGORY
					</TableColumn>
					<TableColumn className="bg-warning-500 text-white">STOCK</TableColumn>
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
						products.map((product) => (
							<TableRow key={product?.id}>
								<TableCell>
									<img
										src={product?.imageURL}
										className="w-[30px]"
										alt={product?.productName}
									/>
								</TableCell>
								<TableCell>{product?.productName}</TableCell>
								<TableCell>{product?.price}</TableCell>
								<TableCell>{product?.createdAt}</TableCell>
								<TableCell title={product?.productDescription}>
									{product?.productDescription.slice(0, 20) + "...."}
								</TableCell>
								<TableCell>{product?.productCategory}</TableCell>
								<TableCell>{product?.stock}</TableCell>
								<TableCell>
									{
										<Switch
											startContent={<FontAwesomeIcon icon={faCheck} />}
											endContent={<FontAwesomeIcon icon={faXmark} />}
											color="success"
											isSelected={product?.isActive}
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
