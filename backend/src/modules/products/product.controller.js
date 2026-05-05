const productService = require("./product.service");
const { validateCreateProduct } = require("./product.validators");

async function getProducts(req, res) {
	try {
		const products = await productService.getAllProducts();
		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Erreur lors de la récupération des produits",
		});
	}
}

async function createProduct(req, res) {
	try {
		const validationError = validateCreateProduct(req.body);

		if (validationError) {
			return res.status(400).json({ error: validationError });
		}

		const product = await productService.createProduct(req.body);
		res.status(201).json(product);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Erreur lors de la création du produit",
		});
	}
}

module.exports = {
	getProducts,
	createProduct,
};
