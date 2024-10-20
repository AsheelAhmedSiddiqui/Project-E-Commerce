import React from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardRightBar from "../components/DashboardRightBar";
import AddCateForm from "../components/AddCateFrom";

export default function AddCategory() {
	return (
		<div>
			<DashboardNav />
			<div className="flex ">
				<DashboardRightBar />
				<AddCateForm />
			</div>
		</div>
	);
}
