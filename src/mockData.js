// Mock Data for Furniture E-commerce Website

const categories = [
	{
		categoryId: 1,
		categoryName: "Living Room Furniture",
		description: "Comfortable and stylish seating options.",
        cateImage: "/public/images/img23.png"
	},
	{
		categoryId: 2,
		categoryName: "Dining Furniture",
		description: "Tables, chairs, and dining sets.",
        cateImage: "/public/images/img21.png"
	},
	{
		categoryId: 3,
		categoryName: "Bedroom Furniture",
		description: "Beds, dressers, and nightstands.",
        cateImage: "/public/images/img22.png"
	},
];

const products = [
	{
		productId: 1,
		productName: "Modern Leather Sofa",
		categoryId: 1,
		price: "$899.99",
		stock: 25,
		description:
			"A sleek leather sofa with seating for 3, available in black and brown.",
		rating: 4.7,
		imageURL: "img1.jpg",
	},
	{
		productId: 2,
		productName: "Oak Dining Table Set",
		categoryId: 2,
		price: "$649.99",
		stock: 15,
		description:
			"A 6-seater dining table made of solid oak wood, includes chairs.",
		rating: 4.5,
		imageURL: "img2.jpg",
	},
	{
		productId: 3,
		productName: "King-Sized Wooden Bed",
		categoryId: 3,
		price: "$1200.00",
		stock: 8,
		description: "Spacious king-sized bed frame made of teak wood.",
		rating: 4.8,
		imageURL: "img3.jpg",
	},
	{
		productId: 4,
		productName: "Fabric Sectional Sofa",
		categoryId: 1,
		price: "$1050.00",
		stock: 10,
		description:
			"Comfortable fabric sectional sofa, perfect for large living rooms.",
		rating: 4.5,
		imageURL: "img4.jpg",
	},
	{
		productId: 5,
		productName: "Solid Wood Dining Bench",
		categoryId: 2,
		price: "$299.99",
		stock: 12,
		description:
			"Dining bench made of solid wood, perfect for contemporary dining areas.",
		rating: 4.7,
		imageURL: "img5.jpg",
	},
	{
		productId: 6,
		productName: "Queen Bed with Storage",
		categoryId: 3,
		price: "$1300.00",
		stock: 6,
		description:
			"Queen-sized bed with built-in storage drawers, crafted from high-quality wood.",
		rating: 4.8,
		imageURL: "img6.jpg",
	},
	{
		productId: 7,
		productName: "Loveseat Recliner",
		categoryId: 1,
		price: "$850.00",
		stock: 14,
		description:
			"Cozy loveseat recliner with plush seating, ideal for small living rooms.",
		rating: 4.6,
		imageURL: "img7.jpg",
	},
	{
		productId: 8,
		productName: "Glass Top Dining Table",
		categoryId: 2,
		price: "$550.00",
		stock: 9,
		description:
			"A sleek glass top dining table with a modern chrome base, seats 4.",
		rating: 4.4,
		imageURL: "img8.jpg",
	},
	{
		productId: 9,
		productName: "King Bed with Upholstered Headboard",
		categoryId: 3,
		price: "$1450.00",
		stock: 7,
		description: "Luxurious king-sized bed with a plush upholstered headboard.",
		rating: 4.9,
		imageURL: "img9.jpg",
	},
	{
		productId: 10,
		productName: "Wooden Dining Chair Set",
		categoryId: 2,
		price: "$249.99",
		stock: 20,
		description: "Set of 4 wooden dining chairs with cushioned seats.",
		rating: 4.5,
		imageURL: "img10.jpg",
	},
];

// Reviews
const reviews = [
	{
		reviewId: 1,
		productId: 1,
		customerName: "Sarah M.",
		rating: 5,
		comment: "Super comfy! Looks great in my living room.",
	},
	{
		reviewId: 2,
		productId: 2,
		customerName: "Michael R.",
		rating: 4,
		comment: "Sturdy table, but the chairs could be more comfortable.",
	},
	{
		reviewId: 3,
		productId: 3,
		customerName: "Priya K.",
		rating: 5,
		comment: "The best bed I’ve ever owned, solid and beautifully crafted.",
	},
	{
		reviewId: 4,
		productId: 4,
		customerName: "Ali Z.",
		rating: 4.5,
		comment: "Large and cozy, fits my living room perfectly.",
	},
	{
		reviewId: 5,
		productId: 5,
		customerName: "David L.",
		rating: 4.7,
		comment: "Love the quality of the wood, simple and sturdy.",
	},
	{
		reviewId: 6,
		productId: 6,
		customerName: "Nina P.",
		rating: 4.8,
		comment: "Very functional, the storage drawers are a big plus!",
	},
	{
		reviewId: 7,
		productId: 7,
		customerName: "Emily S.",
		rating: 4.6,
		comment: "Really comfortable recliner, perfect for movie nights!",
	},
	{
		reviewId: 8,
		productId: 8,
		customerName: "John D.",
		rating: 4.4,
		comment: "Beautiful design, but wish it was a bit bigger.",
	},
	{
		reviewId: 9,
		productId: 9,
		customerName: "Ahmed Q.",
		rating: 4.9,
		comment: "The upholstered headboard makes the bed look so elegant.",
	},
	{
		reviewId: 10,
		productId: 10,
		customerName: "Lisa B.",
		rating: 4.5,
		comment: "Nice set of chairs, matches my dining table perfectly.",
	},
];

// Example Usage:
console.log("Categories:", categories);
console.log("Products:", products);
console.log("Reviews:", reviews);

// Exporting mock data for use in other parts of the website (Optional)
export { categories, products, reviews };
