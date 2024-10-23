import {
	faCheck,
	faEye,
	faEyeSlash,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Switch,
	Breadcrumbs,
	BreadcrumbItem,
	Input,
	Spinner,
} from "@nextui-org/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase utils";
import { Link } from "react-router-dom";
export default function UsersTable() {
	const [users, setUsers] = useState([]);
	const [isVisible, setIsVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	useEffect(() => {
		// Real-time listener for categories collection
		setLoading(true);
		const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
			const usersList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setUsers(usersList);
			setLoading(false);
		});

		// Cleanup the listener when the component is unmounted
		return () => unsubscribe();
	}, []);
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
						<BreadcrumbItem>Users</BreadcrumbItem>
					</Breadcrumbs>
				</div>
			</div>
			<Table
				aria-label="Example static collection table"
				className="w-[1000px] mx-auto my-4"
			>
				<TableHeader>
					<TableColumn className="bg-warning-500 text-white" >USERNAME</TableColumn>
					<TableColumn className="bg-warning-500 text-white" >PASSWORD</TableColumn>
					<TableColumn className="bg-warning-500 text-white" >EMAIL</TableColumn>
					<TableColumn className="bg-warning-500 text-white" >CREATED AT</TableColumn>
					<TableColumn className="bg-warning-500 text-white" >ROLE</TableColumn>
					<TableColumn className="bg-warning-500 text-white" >STATUS</TableColumn>
				</TableHeader>
				<TableBody>
					{loading ? (
						<TableRow>
							<TableCell>
								<Spinner color="warning" />
							</TableCell>
							<TableCell>
								<Spinner color="warning" />
							</TableCell>
							<TableCell>
								<Spinner color="warning" />
							</TableCell>
							<TableCell>
								<Spinner color="warning" />
							</TableCell>
							<TableCell>
								<Spinner color="warning" />
							</TableCell>
							<TableCell>
								<Spinner color="warning" />
							</TableCell>
						</TableRow>
					) : (
						users.map((user) => (
							<TableRow key={user?.userID}>
								<TableCell>{user?.username}</TableCell>
								<TableCell>
									<Input
										readOnly
										variant="underlined"
										endContent={
											<button
												className="focus:outline-none"
												type="button"
												onClick={toggleVisibility}
												aria-label="toggle password visibility"
											>
												{isVisible ? (
													<FontAwesomeIcon icon={faEyeSlash} />
												) : (
													<FontAwesomeIcon icon={faEye} />
												)}
											</button>
										}
										value={user?.password}
										type={isVisible ? "text" : "password"}
										className="max-w-xs"
									/>
								</TableCell>
								<TableCell>{user?.email}</TableCell>
								<TableCell>{user?.createdAt}</TableCell>
								<TableCell>{user?.role}</TableCell>
								<TableCell>
									{
										<Switch
											startContent={<FontAwesomeIcon icon={faCheck} />}
											endContent={<FontAwesomeIcon icon={faXmark} />}
											color="success"
											isSelected={user?.isActive}
										/>
									}
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
}
