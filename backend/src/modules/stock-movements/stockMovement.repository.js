const prisma = require("../../prisma/client");

const createMovement = async (data) => {
	return prisma.stockMovement.create({
		data,
	});
};
async function findAll() {
	return prisma.stockMovement.findMany({
		orderBy: {
			createdAt: "desc",
		},
		include: {
			product: true,
		},
	});
}
module.exports = {
	createMovement,
	findAll,
};
