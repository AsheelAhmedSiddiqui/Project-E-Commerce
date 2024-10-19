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

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop/:id" element={<SingleProduct />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/dashboard/user" element={<Users />} />
				<Route path="/dashboard/products" element={<DashboardProducts />} />
				<Route path="/dashboard/categories" element={<DashboardCategories />} />
				<Route path="/dashboard/orders" element={<Orders />} />
				<Route
					path="/dashborad/products/addproducts"
					element={<AddProducts />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
