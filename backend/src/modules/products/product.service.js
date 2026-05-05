const prisma = require("../../prisma/client");

async function getAllProducts() {
	return prisma.product.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
}

async function createProduct(data) {
	return prisma.product.create({
		data: {
			name: data.name,
			unit: data.unit,
			currentStock: data.currentStock || 0,
			alertThreshold: data.alertThreshold || 0,
			averagePrice: data.averagePrice || null,
		},
	});
}

module.exports = {
	getAllProducts,
	createProduct,
};
