import { products } from "../mockData";
import Product from "./Product";

export default function OurProducts() {
	return (
		<div className="container py-20 px-6">
			<h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
			<div className="grid grid-cols-4 gap-4 w-[1100px] mx-auto">
				{products.slice(0, 8).map((data) => (
					<Product key={data.productId} pro={data} />
				))}
			</div>
		</div>
	);
}
