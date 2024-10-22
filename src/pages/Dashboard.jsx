import DashboardInfo from "../components/DashboardInfo";
import DashboardNav from "../components/DashboardNav";
import DashboardRightBar from "../components/DashboardRightBar";

export default function Dashboard() {
	return (
		<>
			<DashboardNav />
			<div className="flex">
				<DashboardRightBar />
				<DashboardInfo />
			</div>
		</>
	);
}
