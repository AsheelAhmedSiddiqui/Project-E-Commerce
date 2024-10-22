import { Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function DashboardNav() {
	return (
		<header className="py-4 shadow-md border-b-1">
			<div className="container w-[1250px] mx-auto flex items-center justify-between">
				<div className="logo">
					<Link to={"/dashboard"} className="flex items-center ">
						<img src="/public/logo.png" className="w-[50px]" alt="" />
						<h1 className="text-2xl font-semibold">Dashboard</h1>
					</Link>
				</div>
				<div className="user flex items-center gap-4 mr-6">
					<Avatar />
					<h2>Admin</h2>
				</div>
			</div>
		</header>
	);
}
