import { Link } from "react-router-dom";

export default function ShopPro({ pro }) {
	return (
		<div>
			<Link to={`/shop/${pro.id}`}>
				<div className="bg-gray-200 relative rounded hover:scale-90 transition-all cursor-pointer">
					<div className="product-image">
						<img
					 		src={pro.imageURL}
							alt={pro.productDescription}
							className="hover:opacity-60 transition-all"
						/>
					</div>
					<div className="product-content py-3 px-4">
						<h3 className="text-xl font-semibold mb-2">{pro.productName}</h3>
						<p className="text-base text-gray-600 mb-6">
							{pro.productDescription.slice(0, 20) + "..."}
						</p>
						<h4 className="text-xl font-medium mb-1">${pro.price}</h4>
					</div>
					{/* <div
						className={`
                    ${pro.discount < 30 ? "bg-red-600" : "bg-green-500"}
                    discount w-12 font-semibold text-white h-12 rounded-full flex items-center justify-center absolute bottom-0 top-6 right-4 bg-opacity-75`}
					>
						<span>{pro.discount}%</span>
					</div> */}
				</div>
			</Link>
		</div>
	);
}
