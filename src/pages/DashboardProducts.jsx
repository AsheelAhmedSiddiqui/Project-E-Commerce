import React from "react";
import DashboardRightBar from "../components/DashboardRightBar";
import DashboardNav from "../components/DashboardNav";
import ProTable from "../components/ProTable";

export default function DashboardProducts() {
	return (
		<div>
			<DashboardNav />
			<div className="flex">
				<DashboardRightBar />
				<ProTable />
			</div>
		</div>
	);
}
