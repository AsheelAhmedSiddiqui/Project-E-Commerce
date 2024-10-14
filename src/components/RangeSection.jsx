import { categories } from "../mockData";
import Category from "./Category";

export default function Range() {
	return (
		<section className="container py-20 px-6">
			<h1 className="text-3xl font-bold text-center mb-1">Broswer The Range</h1>
			<p className="text-medium text-gray-500 text-center font-medium mb-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<div className="categories-container w-[1000px] mx-auto grid grid-cols-3 gap-4">
				{categories.map((data) => (
					<Category key={data.categoryId} cate={data} />
				))}
			</div>
		</section>
	);
}
