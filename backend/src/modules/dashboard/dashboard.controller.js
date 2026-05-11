const dashboardService = require("./dashboard.service");

async function getStats(req, res) {
	try {
		const stats = await dashboardService.getStats();
		res.status(200).json(stats);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}

module.exports = {
	getStats,
};
