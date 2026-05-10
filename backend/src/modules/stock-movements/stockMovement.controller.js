const stockMovementService = require("./stockMovement.service");

const createMovement = async (req, res) => {
	try {
		const movement = await stockMovementService.createMovement(req.body);
		res.status(201).json(movement);
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	createMovement,
};
