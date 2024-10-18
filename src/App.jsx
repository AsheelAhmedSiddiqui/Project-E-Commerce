import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./components/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop/:id" element={<SingleProduct />} />
			</Routes>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/dashboard/user" element={<Users />} />
				<Route path="/shop/:id" element={<SingleProduct />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
