import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./components/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import DashboardProducts from "./pages/DashboardProducts";
import DashboardCategories from "./pages/DashboardCategories";
import Orders from "./pages/Orders";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddProducts from "./pages/AddProducts";
import AddCategory from "./pages/AddCategory";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import MyOrders from "./pages/MyOrders";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop/:id" element={<SingleProduct />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/checkout" element={<CheckOut />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/myorders" element={<MyOrders />} />
			</Routes>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/dashboard/user" element={<Users />} />
				<Route path="/dashboard/products" element={<DashboardProducts />} />
				<Route path="/dashboard/categories" element={<DashboardCategories />} />
				<Route path="/dashboard/orders" element={<Orders />} />
				<Route
					path="/dashboard/products/addproducts"
					element={<AddProducts />}
				/>
				<Route
					path="/dashboard/categories/addcategory"
					element={<AddCategory />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
