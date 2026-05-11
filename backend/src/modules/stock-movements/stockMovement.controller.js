const stockMovementService = require("./stockMovement.service");

const createMovement = async (req, res) => {
	try {
		const result = await stockMovementService.createMovement(req.body);
		res.status(201).json(result);
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: error.message });
	}
};
async function getStockMovements(req, res) {
	const movements = await stockMovementService.getAllStockMovements();

	res.status(200).json(movements);
}
module.exports = {
	createMovement,
	getStockMovements,
};
