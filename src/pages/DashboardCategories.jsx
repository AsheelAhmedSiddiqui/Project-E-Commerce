import React from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardRightBar from "../components/DashboardRightBar";
import CateTable from "../components/CateTable";

export default function DashboardCategories() {
	return (
		<div>
			<DashboardNav />
			<div className="flex ">
				<DashboardRightBar />
				<CateTable />
			</div>
		</div>
	);
}
