const productRepository = require("./product.repository");

const getProducts = async () => {
	return productRepository.getAllProducts();
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
	};

	return productRepository.createProduct(productData);
};

module.exports = {
	getProducts,
	createProduct,
};
