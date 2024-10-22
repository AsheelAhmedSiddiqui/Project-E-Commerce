import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import MyHeader from "../components/Header";
import Footer from "../components/Footer";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function CheckOut() {
	const { cart } = useContext(CartContext);
	const [fName, setFName] = useState("");
	const [LName, setLName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	const totalItemsQuantity = cart.reduce(
		(value, items) => value + items.quantity,
		0
	);
	const totalItemsPrice = cart.reduce(
		(value, items) => value + items.quantity * items.price,
		0
	);
	return (
		<>
			<MyHeader />
			<div className="container w-[1000px] mx-auto my-[50px]">
				<div className="grid grid-cols-3 mt-16 gap-4">
					<div className="checkout-form col-span-2 shadow-lg border">
						<h1 className="text-2xl font-medium text-warning-500 py-4 px-6 mb-4">
							Check Out
						</h1>
						<form className="w-[600px] flex flex-col gap-4 mx-auto">
							<div className="flex gap-4 items-center">
								<Input
									color="warning"
									placeholder="First Name"
									type="text"
									variant="bordered"
								/>
								<Input
									color="warning"
									placeholder="Last Name"
									type="text"
									variant="bordered"
								/>
							</div>
							<div className="flex gap-4 items-center">
								<Input
									color="warning"
									placeholder="Phone Number"
									type="number"
									variant="bordered"
								/>
								<Input
									color="warning"
									placeholder="Email"
									type="email"
									variant="bordered"
								/>
							</div>
							<div>
								<Textarea
									color="warning"
									placeholder="Street Address"
									variant="bordered"
								></Textarea>
							</div>
							<Button
								className="rounded font-medium text-lg mt-4 mb-10"
								color="warning"
							>
								Place Order
							</Button>
						</form>
					</div>
					<div className="checkout-Deatils shadow-lg border">
						<h1 className="py-3 px-4 bg-warning-500 text-lg font-medium text-center">
							Your Order
						</h1>
						<div className="py-2 px-4">
							<div className="flex items-center justify-between p-2">
								<h3 className="font-bold">Product</h3>
								<h3 className="font-bold">Sub Total</h3>
							</div>
							<hr className="border-black" />
							{cart.map((items) => (
								<div
									key={items.id}
									className="flex items-center justify-between p-2"
								>
									<h3 className="font-medium">{items.productName}</h3>
									<h3 className="font-medium">
										${items.quantity * items.price}
									</h3>
								</div>
							))}
							<hr className="mt-6" />
							<div className="flex items-center justify-between p-2">
								<h3 className="font-medium">Total Items Quantity</h3>
								<h3 className="font-medium">{totalItemsQuantity}</h3>
							</div>
							<hr />
							<div className="flex items-center justify-between p-2 mb-8">
								<h3 className="font-medium">Sub Total</h3>
								<h3 className="font-medium">${totalItemsPrice}</h3>
							</div>
							<hr />
							<div className="flex items-center justify-between p-2">
								<h3 className="font-medium">Grand Total</h3>
								<h3 className="font-medium">${totalItemsPrice}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
