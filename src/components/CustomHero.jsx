import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function ShopHero() {
	return (
		<div className="h-screen bg-[url('/images/img20.png')] bg-cover bg-center bg-no-repeat w-full flex items-center justify-center flex-col">
			<h1 className="text-5xl font-semibold mb-4">Shop</h1>
			<Breadcrumbs className="text-4xl">
				<BreadcrumbItem className="font-medium">
					<Link to={"/"} className="text-xl text-black hover:underline">
						Home
					</Link>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<Link to={"/shop"} className="text-xl text-black hover:underline">
						Shop
					</Link>
				</BreadcrumbItem>
			</Breadcrumbs>
		</div>
	);
}
