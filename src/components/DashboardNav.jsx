import { Avatar, Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase utils";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function DashboardNav() {
	const user = auth.currentUser;
	const navigate = useNavigate();

	function handleSignOut() {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
				alert(error);
			});
	}

	return (
		<header className="py-4 shadow-md border-b-1">
			<div className="container w-[1250px] mx-auto flex items-center justify-between">
				<div className="logo">
					<Link to={"/dashboard"} className="flex items-center ">
						<img src="/public/logo.png" className="w-[50px]" alt="" />
						<h1 className="text-2xl font-semibold">Dashboard</h1>
					</Link>
				</div>
				<div className="user flex items-center gap-6 mr-6">
					<Avatar
						classNames={{
							base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
							icon: "text-black/80",
						}}
					/>
					<h2 className="text-lg font-medium text-warning-500">
						{user?.email == "admin@gmail.com" ? "Admin" : "no user"}
					</h2>
					<Link to={"/"}>
						<FontAwesomeIcon icon={faArrowLeft} /> Go Web
					</Link>
					<Button
						onClick={handleSignOut}
						color="danger"
						className="text-lg font-medium"
					>
						Log Out
					</Button>
				</div>
			</div>
		</header>
	);
}
