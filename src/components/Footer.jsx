import { Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="pt-8 pb-6 border-t-1">
			<div className="container grid grid-cols-4 w-[1000px] gap-4 mx-auto py-6">
				<div className="details flex flex-col gap-6">
					<h2 className="text-2xl font-bold">Furnio.</h2>
					<p className="text-gray-400">
						400 University Drive Suite 200 Coral <br /> Glables, <br />
						FL 3314 USA
					</p>
				</div>
				<div className="links">
					<h2 className="text-2xl font-bold mb-6">Links</h2>
					<div className="link-group flex flex-col gap-7">
						<Link className="font-medium hover:text-gray-400 transition-all">
							Home
						</Link>
						<Link className="font-medium hover:text-gray-400 transition-all">
							Shop
						</Link>
						<Link className="font-medium hover:text-gray-400 transition-all">
							About
						</Link>
						<Link className="font-medium hover:text-gray-400 transition-all">
							Contact
						</Link>
					</div>
				</div>
				<div className="help">
					<h2 className="text-2xl font-bold mb-6">Help</h2>
					<div className="link-group flex flex-col gap-7">
						<Link className="font-medium hover:text-gray-400 transition-all">
							Payment Options
						</Link>
						<Link className="font-medium hover:text-gray-400 transition-all">
							Returns
						</Link>
						<Link className="font-medium hover:text-gray-400 transition-all">
							Privacy Policy
						</Link>
					</div>
				</div>
				<div className="newsletter flex flex-col gap-4">
					<h2 className="text-2xl font-bold">Newsletter</h2>
					<p>Subscribe to our newsletter to get the latest news and updates.</p>
					<div className="input-box flex gap-4 items-center justify-center">
						<Input type="email" variant="underlined" label="Email"/>
					</div>
				</div>
			</div>
			<hr />
			<div className="bottom w-[1000px] mx-auto">
				<p className="text-medium font-medium pt-3 px-4">
					&copy; {new Date().getFullYear()} furnio. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
