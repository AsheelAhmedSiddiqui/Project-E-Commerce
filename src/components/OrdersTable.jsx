import {
	BreadcrumbItem,
	Breadcrumbs,
	Chip,
	Spinner,
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

export default function OrdersTable() {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Real-time listener for categories collection
		setLoading(true);
		const unsubscribe = onSnapshot(collection(db, "orders"), (snapshot) => {
			const ordersList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setOrders(ordersList);
			setLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);

	console.log(orders);

	return (
		<div className="flex flex-col w-[1000px] mx-auto my-8">
			<div className=" flex justify-	between items-center mx-2">
				<div>
					<Breadcrumbs>
						<BreadcrumbItem>
							<Link to={"/dashboard"}>
								<span className="hover:text-gray-400 hover:underline ">
									Dashboard
								</span>
							</Link>
						</BreadcrumbItem>
						<BreadcrumbItem>Orders</BreadcrumbItem>
					</Breadcrumbs>
				</div>
			</div>

			<Table
				aria-label="Example static collection table"
				className="w-[1000px] mx-auto my-6"
			>
				<TableHeader>
					<TableColumn className="bg-warning-500 text-white">
						ORDER ID
					</TableColumn>
					<TableColumn className="bg-warning-500 text-white">
						ORDER AT
					</TableColumn>
					<TableColumn className="bg-warning-500 text-white">
						ORDER AMOUNT
					</TableColumn>
					<TableColumn className="bg-warning-500 text-white">
						ORDER STATUS
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
						orders.map((data) => (
							<TableRow key={data.orderID}>
								<TableCell>{data.orderID}</TableCell>
								<TableCell>{data.orderAt}</TableCell>
								<TableCell>${data.totalItemsPrice}</TableCell>
								<TableCell>
									<Chip
										className={`
									${
										data.status == "pending"
											? "bg-success-600 text-white"
											: "bg-red-600 text-white"
									}
										`}
									>
										{data.status}
									</Chip>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
}
