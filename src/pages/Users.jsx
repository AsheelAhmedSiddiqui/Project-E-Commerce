import DashboardNav from "../components/DashboardNav";
import DashboardRightBar from "../components/DashboardRightBar";
import UsersTable from "../components/UserTable";

export default function Users() {
	return (
		<>
			<DashboardNav />
			<div className="flex ">
				<DashboardRightBar />
				<UsersTable />
			</div>
		</>
	);
}
