import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Badge } from "@nextui-org/badge";
import { faCartShopping, faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { auth } from "../firebase utils";
export default function MyHeader() {
	const { cart } = useContext(CartContext);
	const user = auth.currentUser;

	return (
		<Navbar className="w-[1100px] mx-auto">
			<NavbarBrand
				className="flex items-center gap-0
            "
			>
				<img width={50} src="/public/logo.png" alt="furnio logo" />
				<p className="font-bold text-2xl">Furniro</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-10" justify="center">
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
			<NavbarContent justify="end" className="flex gap-6">
				{user ? (
					<>
						<NavbarItem>
							<FontAwesomeIcon icon={faUser} />
						</NavbarItem>
						<p className="text-warning-500">{user.email}</p>
						<NavbarItem>
							<Link to={"/cart"}>
								<Badge content={cart.length} color="danger">
									<FontAwesomeIcon icon={faCartShopping} />
								</Badge>
							</Link>
						</NavbarItem>
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
