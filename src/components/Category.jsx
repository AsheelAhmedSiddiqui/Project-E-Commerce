import { Image } from "@nextui-org/react";

export default function Category({ cate }) {
	// console.log(cate);
	return (
		<div className="hover:scale-95 hover:cursor-pointer hover:text-gray-500 transition-all">
			<div className="cate-image">
				<Image src={cate.cateImage} className="h-[500px] object-cover " />
				<h1 className="py-2 text-center mt-3 text-xl font-semibold">
					{cate.categoryName}
				</h1>
			</div>
		</div>
	);
}
