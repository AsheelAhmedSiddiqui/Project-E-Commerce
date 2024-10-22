import {
	faCartShopping,
	faClipboardCheck,
	faThList,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function DashboardRightBar() {
	return (
		<aside className="w-[240px] bg-warning-500 py-6 px-4 shadow-xl min-h-screen">
			<div className="group flex flex-col justify-center gap-2">
				<Link
					to={"/dashboard/user"}
					className="py-2 px-4 hover:bg-warning-500 transition-all text-lg font-medium bg-white border-2 border-white rounded-medium"
				>
					<FontAwesomeIcon icon={faUsers} className="mr-3" />
					Users
				</Link>
				<Link
					to={"/dashboard/products"}
					className="py-2 px-4 hover:bg-warning-500 transition-all text-lg font-medium bg-white border-2 border-white rounded-medium"
				>
					<FontAwesomeIcon icon={faCartShopping} className="mr-3" />
					Products
				</Link>
				<Link
					to={"/dashboard/categories"}
					className="py-2 px-4 hover:bg-warning-500 transition-all text-lg font-medium bg-white border-2 border-white rounded-medium"
				>
					<FontAwesomeIcon icon={faThList} className="mr-3" />
					Categories
				</Link>
				<Link
					to={"/dashboard/orders"}
					className="py-2 px-4 hover:bg-warning-500 transition-all text-lg font-medium bg-white border-2 border-white rounded-medium"
				>
					<FontAwesomeIcon icon={faClipboardCheck} className="mr-2" />
					Orders
				</Link>
			</div>
		</aside>
	);
}
