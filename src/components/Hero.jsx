import { Link } from "react-router-dom";
export default function Hero() {
	return (
		<div className="h-screen bg-[url('/components-images/hero.jfif')] bg-cover bg-center bg-no-repeat w-full relative">
			<div className="hero-box rounded w-[550px] h-[400px] bg-[#FFF3E3] absolute top-[100px] right-[50px] py-16 px-14">
				<h4 className="uppercase font-medium tracking-widest mb-1">
					new arrival
				</h4>
				<h1 className="capitalize mb-4 font-bold text-[#B88E2F] text-5xl leading-tight">
					discover our
					<span className="block">new collection</span>
				</h1>
				<p className="font-[500] mb-8">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut dolor
					provident odio nulla.
				</p>
				<Link to={"/shop"}>
					<button className="uppercase py-5 px-20 bg-[#B88E2F] font-medium text-white rounded transition hover:text-[#B88E2F] hover:border hover:border-[#B88E2F] hover:bg-transparent">
						buy now
					</button>
				</Link>
			</div>
		</div>
	);
}
