import CustomHero from "../components/CustomHero";
import Footer from "../components/Footer";
import MyHeader from "../components/Header";
import OurProducts from "../components/OurProducts";

export default function Shop() {
	return (
		<>
			<header className="bg-white">
				<MyHeader />
			</header>
			<CustomHero image={"/components-images/hero.jfif"} heading={"Shop"} />
			<OurProducts />
			<Footer />
		</>
	);
}
