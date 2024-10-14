import Footer from "../components/Footer";
import MyHeader from "../components/Header";
import Hero from "../components/Hero";
import OurProducts from "../components/OurProducts";
import Range from "../components/RangeSection";
import Rooms from "../components/Rooms";

export default function Home() {
	return (
		<>
			<header className="bg-white">
				<MyHeader />
			</header>
			<Hero />
			<Range />
			<OurProducts />
			<Rooms />
			<Footer />
		</>
	);
}
