import { Avatar } from "@nextui-org/react";

export default function DashboardNav() {
	return (
		<header className="py-4 shadow-md border-b-1">
			<div className="container w-[1200px] mx-auto flex items-center justify-between">
				<div className="logo">
					<h1>Dashboard</h1>
				</div>
				<div className="user flex items-center gap-4">
					<Avatar />
					<h2>Admin</h2>
				</div>
			</div>
		</header>
	);
}
