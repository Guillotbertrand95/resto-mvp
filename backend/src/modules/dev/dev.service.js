const prisma = require("../../prisma/client");

const resetDatabase = async () => {
	await prisma.stockMovement.deleteMany();
	await prisma.product.deleteMany();

	return {
		message: "Données de test supprimées",
	};
};

module.exports = {
	resetDatabase,
};
