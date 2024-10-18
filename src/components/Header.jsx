import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Badge } from "@nextui-org/badge";
import {
	faCartShopping,
	faSearch,
	faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function MyHeader() {
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
			<NavbarContent justify="end" className="flex gap-8">
				<NavbarItem>
					<FontAwesomeIcon icon={faUserXmark} />
				</NavbarItem>
				<NavbarItem>
					<FontAwesomeIcon icon={faSearch} />
				</NavbarItem>
				<NavbarItem>
					<FontAwesomeIcon icon={faHeart} />
				</NavbarItem>
				<NavbarItem>
					<Badge content={5} color="danger">
						<FontAwesomeIcon icon={faCartShopping} />
					</Badge>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
