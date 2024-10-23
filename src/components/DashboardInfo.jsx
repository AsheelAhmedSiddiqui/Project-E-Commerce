import {
	faClipboardCheck,
	faThLarge,
	faThList,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons/faCartFlatbed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Spinner } from "@nextui-org/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase utils";

export default function DashboardInfo() {
	const [users, setUsers] = useState([]);
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [order, setOrder] = useState([]);

	const [userLoading, setUserLoading] = useState(false);
	const [proLoading, setProLoading] = useState(false);
	const [cateLoading, setCateLoading] = useState(false);
	const [orderLoading, setOrderLoading] = useState(false);

	useEffect(() => {
		// Real-time listener for categories collection
		setUserLoading(true);
		const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
			const usersList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setUsers(usersList);
			setUserLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		// Real-time listener for categories collection
		setProLoading(true);
		const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
			const productList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setProducts(productList);
			setProLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		// Real-time listener for categories collection
		setCateLoading(true);
		const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
			const cateList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setCategories(cateList);
			setCateLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		// Real-time listener for categories collection
		setOrderLoading(true);
		const unsubscribe = onSnapshot(collection(db, "orders"), (snapshot) => {
			const cateList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setOrder(cateList);
			setOrderLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);

	return (
		<div className="flex flex-col w-[1000px] mx-auto items-center justify-center my-8">
			<div className="grid grid-cols-3 gap-4 border py-3 px-4 ">
				<div className="left-area col-span-2">
					<Image src="/images/img1.jpg" />
				</div>
				<div className="right-area">
					<table className="w-[100%] border-spacing-3">
						<thead>
							<tr>
								<th
									colSpan={2}
									className="border py-2 bg-[#f5a524] text-white font-semibold"
								>
									Furnio
								</th>
								{/* <th></th> */}
							</tr>
							<tr>
								<th
									colSpan={2}
									className="border py-2 bg-[#f5a524] text-white font-semibold"
								>
									{new Date().toLocaleDateString()}
								</th>
								{/* <th></th> */}
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="flex items-center gap-2 border py-2 text-left px-4 font-medium">
									<FontAwesomeIcon icon={faUsers} color="#f5a524" />
									Total Users
								</td>
								<td className="border py-2 text-center px-4">
									{userLoading ? (
										<Spinner color="warning" size="sm" />
									) : (
										users.length
									)}
								</td>
							</tr>
							<tr>
								<td className="flex items-center gap-2 border py-2 text-left px-4 font-medium">
									<FontAwesomeIcon icon={faCartFlatbed} color="#f5a524" />
									Total Products
								</td>
								<td className="border py-2 text-center px-4">
									{proLoading ? (
										<Spinner color="warning" size="sm" />
									) : (
										products.length
									)}
								</td>
							</tr>
							<tr>
								<td className="flex items-center gap-2 border py-2 text-left px-4 font-medium">
									<FontAwesomeIcon icon={faThList} color="#f5a524" />
									Total Categories
								</td>
								<td className="border py-2 text-center px-4">
									{cateLoading ? (
										<Spinner color="warning" size="sm" />
									) : (
										categories.length
									)}
								</td>
							</tr>
							<tr>
								<td className="flex items-center gap-2 border py-2 text-left px-4 font-medium">
									<FontAwesomeIcon icon={faClipboardCheck} color="#f5a524" />
									Total Orders
								</td>
								<td className="border py-2 text-center px-4">
									{orderLoading ? (
										<Spinner color="warning" size="sm" />
									) : (
										order.length
									)}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
