const express = require("express");
const devController = require("./dev.controller");

const router = express.Router();

router.delete("/reset", devController.resetDatabase);

module.exports = router;
