const productService = require("./product.service");

const getProducts = async (req, res) => {
	try {
		const products = await productService.getProducts();
		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Erreur serveur" });
	}
};

const createProduct = async (req, res) => {
	try {
		const product = await productService.createProduct(req.body);
		res.status(201).json(product);
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	getProducts,
	createProduct,
};
