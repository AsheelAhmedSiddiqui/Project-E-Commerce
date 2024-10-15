import { products } from "../mockData";
import ShopPro from "./ShopPro";

export default function ShopProducts() {
	return (
		<>
			<div className="filter bg-[#F9F1E7] py-12 px-8"></div>
			<div className="container py-20 px-6">
				<h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
				<div className="grid grid-cols-4 gap-4 w-[1100px] mx-auto">
					{products.map((data) => (
						<ShopPro pro={data} key={data.productId} />
					))}
				</div>
			</div>
		</>
	);
}
