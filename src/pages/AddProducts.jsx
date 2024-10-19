import React from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardRightBar from "../components/DashboardRightBar";
import CateTable from "../components/CateTable";
import AddProForm from "../components/AddProForm";

export default function AddProducts() {
	return (
		<div>
			<DashboardNav />
			<div className="flex ">
				<DashboardRightBar />
				<AddProForm/>
			</div>
		</div>
	);
}
