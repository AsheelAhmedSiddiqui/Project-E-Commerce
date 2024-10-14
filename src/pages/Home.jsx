import MyHeader from "../components/Header";
import Hero from "../components/Hero";
import Range from "../components/RangeSection";

export default function Home() {
	return (
		<>
			<header className="bg-white">
				<MyHeader />
			</header>
			<Hero />
			<Range />
		</>
	);
}
