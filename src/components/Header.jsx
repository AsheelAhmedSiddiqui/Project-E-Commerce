import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Badge } from "@nextui-org/badge";
import {
	faCartShopping,
	faPowerOff,
	faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { auth } from "../firebase utils";
import { signOut } from "firebase/auth";

export default function MyHeader() {
	const { cart } = useContext(CartContext);
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
		<Navbar className="w-full mx-auto p-0">
			<NavbarBrand
				className="flex items-center flex-shrink-0
            "
			>
				<img width={50} src="/images/logo.png" alt="furnio logo" />
				<p className="font-bold text-2xl">Furniro</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-6" justify="center">
				<NavbarItem>
					<Link to={"/"}>Home</Link>
				</NavbarItem>
				<NavbarItem>
					<Link to={"/shop"}>Shop</Link>
				</NavbarItem>
				<NavbarItem>
					<Link to={"/about"}>About</Link>
				</NavbarItem>
				<NavbarItem>
					<Link to={"/contact"}>contact</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end" className="flex flex-grow gap-4">
				{user ? (
					<>
						<Link to={"/myorders"}>
							<NavbarItem>
								<FontAwesomeIcon icon={faUser} />
							</NavbarItem>
						</Link>
						<p className="text-warning-500">
							{user.displayName ? user.displayName : user.email}
						</p>
						<NavbarItem>
							<Link to={"/cart"}>
								<Badge content={cart.length} color="danger">
									<FontAwesomeIcon icon={faCartShopping} />
								</Badge>
							</Link>
						</NavbarItem>
						<Button
							onClick={handleSignOut}
							color="danger"
							className="text-lg font-medium w-[10px]"
						>
							<FontAwesomeIcon icon={faPowerOff} />
						</Button>
					</>
				) : (
					<>
						<Link to={"/login"}>
							<NavbarItem>
								<FontAwesomeIcon icon={faUserXmark} />
							</NavbarItem>
						</Link>
						<NavbarItem>
							<Link to={"/cart"}>
								<Badge content={cart.length} color="danger">
									<FontAwesomeIcon icon={faCartShopping} />
								</Badge>
							</Link>
						</NavbarItem>
					</>
				)}
			</NavbarContent>
		</Navbar>
	);
}
