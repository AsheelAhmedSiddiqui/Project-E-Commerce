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
} from "@nextui-org/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase utils";
import { Link } from "react-router-dom";
export default function UsersTable() {
	const [users, setUsers] = useState([]);
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	useEffect(() => {
		// Real-time listener for categories collection
		const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
			const usersList = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setUsers(usersList);
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
					<TableColumn>USERNAME</TableColumn>
					<TableColumn>PASSWORD</TableColumn>
					<TableColumn>EMAIL</TableColumn>
					<TableColumn>CREATED AT</TableColumn>
					<TableColumn>ROLE</TableColumn>
					<TableColumn>STATUS</TableColumn>
				</TableHeader>
				<TableBody>
					{users.map((user) => (
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
					))}
				</TableBody>
			</Table>
		</div>
	);
}
