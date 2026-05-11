const express = require("express");
const stockMovementController = require("./stockMovement.controller");

const router = express.Router();

router.post("/", stockMovementController.createMovement);
router.get("/", stockMovementController.getStockMovements);
module.exports = router;
