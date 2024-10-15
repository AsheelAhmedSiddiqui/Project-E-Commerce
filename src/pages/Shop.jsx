import ShopHero from "../components/CustomHero";
import Footer from "../components/Footer";
import MyHeader from "../components/Header";
import ShopProducts from "../components/ShopProducts";

export default function Shop() {
	return (
		<>
			<header className="bg-white">
				<MyHeader />
			</header>
			<ShopHero />
			<ShopProducts />
			<Footer />
		</>
	);
}
