import { collection, onSnapshot } from "firebase/firestore";
import ShopPro from "./ShopPro";
import { db } from "../firebase utils";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

export default function ShopProducts() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
			const proList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setProducts(proList);
			setLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);

	return (
		<>
			<div className="filter bg-[#F9F1E7] py-12 px-8"></div>
			<div className="container py-20 px-6">
				<h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
				{loading ? (
					<div className="flex items-center h-screen justify-center w-[1100px] mx-auto">
						<Spinner
							color="warning"
							size="lg"
							label="Product loading..."
							className="font-medium text-2xl"
						/>
					</div>
				) : (
					<div className="grid grid-cols-4 gap-4 w-[1100px] mx-auto">
						{products.map((data) => (
							<ShopPro pro={data} key={data.id} />
						))}
					</div>
				)}
			</div>
		</>
	);
}
