import { useEffect, useState } from "react";
import Product from "./Product";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase utils";
import { Spinner } from "@nextui-org/react";

export default function OurProducts() {
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
		<div className="container py-20 px-6">
			<h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
			{loading ? (
				<div className="flex items-center h-screen text-center justify-center w-[100%]">
					<Spinner
						color="warning"
						size="lg"
						label="Products Loading..."
						className="text-2xl font-medium"
					/>
				</div>
			) : (
				<div className="grid grid-cols-4 gap-4 w-[1100px] mx-auto">
					{products.map((data) => (
						<Product key={data.id} pro={data} />
					))}
				</div>
			)}
		</div>
	);
}
