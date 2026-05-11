const prisma = require("../../prisma/client");

async function getStats() {
	const movements = await prisma.stockMovement.findMany();
	const products = await prisma.product.findMany();

	const totalInValue = movements
		.filter((movement) => movement.type === "IN" && movement.unitPrice)
		.reduce((total, movement) => {
			return total + movement.quantity * movement.unitPrice;
		}, 0);

	const totalOutValue = movements
		.filter((movement) => movement.type === "OUT" && movement.unitPrice)
		.reduce((total, movement) => {
			return total + movement.quantity * movement.unitPrice;
		}, 0);

	const currentStockValue = products.reduce((total, product) => {
		if (!product.averagePrice) return total;

		return total + product.currentStock * product.averagePrice;
	}, 0);

	return {
		totalInValue,
		totalOutValue,
		currentStockValue,
	};
}

module.exports = {
	getStats,
};
