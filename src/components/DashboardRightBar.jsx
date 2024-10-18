import { Link } from "react-router-dom";

export default function DashboardRightBar() {
	return (
		<aside className="w-[240px] bg-[#FFF3E3] py-6 px-4 shadow-xl h-screen">
			<div className="group flex flex-col justify-center gap-2">
				<Link
					to={"/dashboard/user"}
					className="py-2 px-4 bg-amber-300 text-lg font-medium hover:bg-amber-500 rounded-2xl"
				>
					Users
				</Link>
				<Link
					to={"/dashboard/products"}
					className="py-2 px-4 bg-amber-300 text-lg font-medium hover:bg-amber-500 rounded-2xl"
				>
					Products
				</Link>
				<Link
					to={"/dashboard/categories"}
					className="py-2 px-4 bg-amber-300 text-lg font-medium hover:bg-amber-500 rounded-2xl"
				>
					Categories
				</Link>
				<Link
					to={"/dashboard/orders"}
					className="py-2 px-4 bg-amber-300 text-lg font-medium hover:bg-amber-500 rounded-2xl"
				>
					Orders
				</Link>
			</div>
		</aside>
	);
}
