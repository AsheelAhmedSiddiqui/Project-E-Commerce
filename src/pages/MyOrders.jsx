import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MyHeader from "../components/Header";
import {
	collection,
	getDocs,
	onSnapshot,
	query,
	where,
} from "firebase/firestore";
import { auth, db } from "../firebase utils";
import { Spinner } from "@nextui-org/react";

export default function MyOrders() {
	const [order, setOrder] = useState([]);
	const [loading, setLoading] = useState(true);
	const user = auth.currentUser;

	useEffect(() => {
		// Real-time listener for categories collection
		setLoading(true);
		const unsubscribe = onSnapshot(collection(db, "orders"), (snapshot) => {
			const orderList = snapshot.docs
				.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
				.filter((order) => order.userID === user.uid);
			setOrder(orderList);
			setLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);

	return (
		<div>
			<MyHeader />
			<div className="w-[1100px] mx-auto my-24">
				<h1 className="text-center text-warning-500 text-4xl mb-6">
					My Orders
				</h1>
				{loading ? (
					<div className="text-center mt-16">
						<Spinner label="Your Orders Loading... " color="warning" />
					</div>
				) : (
					<div className="orderCards grid grid-cols-3 gap-2">
						{order.map((order) => (
							<div
								key={order?.orderID}
								className=" flex flex-col gap-3 py-6 px-4 bg-white shadow-xl border rounded w-full"
							>
								<h3 className=" flex items-center gap-2 text-xl font-semibold text-warning-500">
									Order Id:<span className="text-black">{order?.orderID}</span>
								</h3>
								<h3 className=" flex items-center gap-2 text-xl font-semibold text-warning-500">
									Order Amount:
									<span className="text-black">{order?.totalItemsPrice}</span>
								</h3>
								<h3 className=" flex items-center gap-2 text-xl font-semibold text-warning-500">
									Order Placed At:
									<span className="text-black">{order?.orderAt}</span>
								</h3>
								<h3 className=" flex items-center gap-2 text-xl font-semibold text-warning-500">
									Order Status:
									<span className="text-black">{order?.status}</span>
								</h3>
							</div>
						))}
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}
