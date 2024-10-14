import { Button } from "@nextui-org/react";
import Slider from "./Slider";

export default function Rooms() {
    return (
        <section className="room py-8 bg-[#FCF8F3]">
			<div className="container w-[1100px] mx-auto flex items-center gap-6 ">
				<div className="left-area flex flex-col">
					<h1 className="text-5xl font-bold text-wrap mb-4">
						50+ Beautiful rooms inspiration
					</h1>
					<p className="text-gray-500">
						Our designer already made a lot of beautiful prototipe of rooms that
						inspire you
					</p>
                    <Button className="w-40 rounded mt-8 bg-[#B88E2F] text-white font-medium hover:text-black">Learn More</Button>
				</div>
				<div className="right-area w-[600px]">
					<Slider />
				</div>
			</div>
		</section>
	);
}
