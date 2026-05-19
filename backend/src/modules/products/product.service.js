const productRepository = require("./product.repository");

const getProducts = async () => {
	const products = await productRepository.getAllProducts();

	return products.map((product) => {
		const availablePortions =
			product.portionQuantity && product.portionQuantity > 0
				? product.currentStock / product.portionQuantity
				: null;

		const portionCost =
			product.portionQuantity && product.averagePrice
				? product.portionQuantity * product.averagePrice
				: null;

		return {
			...product,
			availablePortions,
			portionCost,
		};
	});
};

const createProduct = async (data) => {
	if (!data.name) {
		throw new Error("Le nom du produit est obligatoire");
	}

	if (!data.unit) {
		throw new Error("L'unité du produit est obligatoire");
	}

	const productData = {
		name: data.name,
		unit: data.unit,
		currentStock: Number(data.currentStock) || 0,
		alertThreshold: Number(data.alertThreshold) || 0,
		category: data.category || "Non classé",
		portionQuantity: data.portionQuantity
			? Number(data.portionQuantity)
			: null,
	};

	return productRepository.createProduct(productData);
};

module.exports = {
	getProducts,
	createProduct,
};
