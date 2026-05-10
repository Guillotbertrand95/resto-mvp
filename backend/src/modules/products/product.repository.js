const prisma = require("../../prisma/client");

const getAllProducts = async () => {
	return prisma.product.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
};

const createProduct = async (data) => {
	return prisma.product.create({
		data,
	});
};

module.exports = {
	getAllProducts,
	createProduct,
};
