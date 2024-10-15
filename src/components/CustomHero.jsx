import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function CustomHero({ image, heading }) {
	return (
		<div
			className={`h-screen bg-[url('${image}')] bg-cover bg-center bg-no-repeat w-full flex items-center justify-center flex-col `}
		>
			<h1 className="text-5xl font-semibold mb-4">{heading}</h1>
			<Breadcrumbs className="text-4xl">
				<BreadcrumbItem className="font-medium">
					<Link to={"/"}>Home</Link>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<Link to={"/shop"}>Shop</Link>
				</BreadcrumbItem>
			</Breadcrumbs>
		</div>
	);
}
