const express = require("express");
const stockMovementController = require("./stockMovement.controller");

const router = express.Router();

router.post("/", stockMovementController.createMovement);

module.exports = router;
