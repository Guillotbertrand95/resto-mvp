const devService = require("./dev.service");

const resetDatabase = async (req, res) => {
	try {
		const result = await devService.resetDatabase();
		res.json(result);
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors du reset des données",
		});
	}
};

module.exports = {
	resetDatabase,
};
