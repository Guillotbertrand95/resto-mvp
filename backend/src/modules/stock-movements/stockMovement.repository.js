const prisma = require("../../prisma/client");

const createMovement = async (data) => {
	return prisma.stockMovement.create({
		data,
	});
};

module.exports = {
	createMovement,
};
