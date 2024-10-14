import { Input, Button } from "@nextui-org/react";

export default function Footer() {
	return (
		<footer>
			<div className="container grid grid-cols-4">
				<div className="details">
					<h2 className="text-2xl font-bold">Furnio.</h2>
					<p>
						400 University Drive Suite 200 Coral <br /> Glables, <br />
						FL 3314 USA
					</p>
				</div>
				<div className="links">
					<h2 className="text-2xl font-bold">Links</h2>
				</div>
				<div className="help">
					<h2 className="text-2xl font-bold">Help</h2>
				</div>
				<div className="newsletter">
					<h2 className="text-2xl font-bold">Newsletter</h2>
					<p>Subscribe to our newsletter to get the latest news and updates.</p>
					<div className="input-box flex gap-2 items-center justify-center">
						<Input type="email" variant="underlined" label="Email" />
						<Button
							variant="none"
							className=" border-b-1 border-b-black rounded-none"
						>
							Subscribe
						</Button>
					</div>
				</div>
			</div>
			<hr />
			<div className="bottom">
				<p>&copy; {new Date().getFullYear()} furnio. All rights reserved.</p>
			</div>
		</footer>
	);
}
