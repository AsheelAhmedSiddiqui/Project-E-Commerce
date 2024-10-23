import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import MyHeader from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCartShopping,
	faPlus,
	faSubtract,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { auth } from "../firebase utils";

export default function CartPage() {
	const { cart, increaseQuantity, removeCart } = useContext(CartContext);

	const user = auth.currentUser;

	const totalItemsQuantity = cart.reduce(
		(value, items) => value + items.quantity,
		0
	);
	const totalItemsPrice = cart.reduce(
		(value, items) => value + items.quantity * items.price,
		0
	);

	//   console.log(totalItemsPrice, totalItemsQuantity)

	return (
		<>
			<MyHeader />
			<div className="container w-[1100px] mx-auto my-[100px]">
				<h1 className="flex items-center gap-4 justify-center text-4xl font-medium text-warning-500">
					Shopping Cart
					<FontAwesomeIcon icon={faCartShopping} />
				</h1>
				<div className="grid grid-cols-4 gap-2 mt-12">
					<div className="items-table col-span-3">
						<table className="w-full">
							<thead className="bg-warning-500">
								<tr>
									<th className="border border-white py-2">Image</th>
									<th className="border border-white py-2">Product</th>
									<th className="border border-white py-2">Unit Price</th>
									<th className="border border-white py-2">Quantity</th>
									<th className="border border-white py-2">Sub Total</th>
									<th className="border border-white py-2">Action</th>
								</tr>
							</thead>
							<tbody>
								{cart.map((item) => (
									<tr key={item.id}>
										<td className=" flex items-center justify-center text-center border border-warning-500 py-2 px-2">
											<img
												src={item.imageURL}
												alt={item.productName}
												className="w-[51px]"
											/>
										</td>
										<td className="text-center border border-warning-500 py-2 px-2">
											<h1 className="text-lg font-medium">
												{item.productName}
											</h1>
										</td>
										<td className="text-center border border-warning-500 py-2 px-2">
											<h1 className="text-lg font-medium">${item.price}</h1>
										</td>
										<td className="text-center border border-warning-500 py-2 px-2">
											<div className="flex items-center gap-2  border">
												<button
													className="w-full h-full bg-warning-500 py-2 px-2 hover:opacity-80 transition-all"
													onClick={() => increaseQuantity(item.id, "plus")}
												>
													<FontAwesomeIcon icon={faPlus} />
												</button>
												<div className="px-2">{item.quantity}</div>
												{item.quantity <= 1 ? (
													<button
														className="w-full h-full bg-warning-200 py-2 px-2 hover:opacity-80 transition-all"
														disabled
													>
														<FontAwesomeIcon icon={faSubtract} />
													</button>
												) : (
													<button
														className="w-full h-full bg-warning-500 py-2 px-2 hover:opacity-80 transition-all"
														onClick={() => increaseQuantity(item.id)}
													>
														<FontAwesomeIcon icon={faSubtract} />
													</button>
												)}
											</div>
										</td>
										<td className="text-center border border-warning-500 py-2 px-2">
											<h1 className="text-lg font-medium">
												${item.price * item.quantity}
											</h1>
										</td>
										<td className="text-center border border-warning-500 py-2 px-2">
											<button
												className="text-lg font-medium flex items-center justify-center gap-1 w-full"
												onClick={() => removeCart(item.id)}
											>
												<FontAwesomeIcon icon={faTrash} color="#f5a524" />
												Remove
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="checkout border">
						<h1 className="py-3 px-4 bg-warning-500 text-lg font-medium">
							Order Total
						</h1>
						<div className="py-2 px-4">
							<div className="flex items-center justify-between p-2">
								<h3 className="font-medium">Total Items Quantity</h3>
								<h3 className="font-medium">{totalItemsQuantity}</h3>
							</div>
							<div className="flex items-center justify-between p-2 mb-8">
								<h3 className="font-medium">Sub Total</h3>
								<h3 className="font-medium">{totalItemsPrice}</h3>
							</div>
							<hr />
							<div className="flex items-center justify-between p-2">
								<h3 className="font-medium">Total Price</h3>
								<h3 className="font-medium">{totalItemsPrice}</h3>
							</div>
							<div className="flex items-center justify-between p-2">
								<Button
									size="md"
									color="warning"
									className="rounded w-full text-base font-medium py-2 px-4"
								>
									<Link to={user ? "/checkout" : "/login"} className="w-full">
										Check Out
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
