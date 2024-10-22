import React from "react";
import DashboardRightBar from "../components/DashboardRightBar";
import DashboardNav from "../components/DashboardNav";
import OrdersTable from "../components/OrdersTable";

export default function Orders() {
	return (
		<div>
			<DashboardNav />
			<div className="flex ">
				<DashboardRightBar />
				<OrdersTable />
			</div>
		</div>
	);
}
