import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import React from "react";

export default function OrdersTable() {
	return (
		<Table
			aria-label="Example static collection table"
			className="w-[1000px] mx-auto my-12"
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
	);
}