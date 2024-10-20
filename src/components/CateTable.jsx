import {
	BreadcrumbItem,
	Breadcrumbs,
	Button,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CateTable() {
	return (
		<div className="flex flex-col w-[1000px] mx-auto my-8">
			<div className=" flex justify-between items-center mx-2">
				<div>
					<Breadcrumbs>
						<BreadcrumbItem>
							<Link to={"/dashboard"}>
								<span className="hover:text-gray-400 hover:underline ">
									Dashboard
								</span>
							</Link>
						</BreadcrumbItem>
						<BreadcrumbItem>Categories</BreadcrumbItem>
					</Breadcrumbs>
				</div>
				<Button className="text-lg font-medium text-white" color="warning">
					<Link to={"/dashboard/categories/addcategory"}>Add Category</Link>
				</Button>
			</div>
			<Table
				aria-label="Example static collection table"
				className="w-[1000px] mx-auto my-4"
			>
				<TableHeader>
					<TableColumn>NAME</TableColumn>
					<TableColumn>ROLE</TableColumn>
					<TableColumn>STATUS</TableColumn>
				</TableHeader>
				<TableBody>
					<TableRow key="1">
						<TableCell>Tony Reichert</TableCell>
						<TableCell>CEO</TableCell>
						<TableCell>Active</TableCell>
					</TableRow>
					<TableRow key="2">
						<TableCell>Zoey Lang</TableCell>
						<TableCell>Technical Lead</TableCell>
						<TableCell>Paused</TableCell>
					</TableRow>
					<TableRow key="3">
						<TableCell>Jane Fisher</TableCell>
						<TableCell>Senior Developer</TableCell>
						<TableCell>Active</TableCell>
					</TableRow>
					<TableRow key="4">
						<TableCell>William Howard</TableCell>
						<TableCell>Community Manager</TableCell>
						<TableCell>Vacation</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}
