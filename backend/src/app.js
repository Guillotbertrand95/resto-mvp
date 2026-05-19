const express = require("express");
const cors = require("cors");

const productRoutes = require("./modules/products/product.routes");
const stockMovementRoutes = require("./modules/stock-movements/stockMovement.routes");
const dashboardRoutes = require("./modules/dashboard/dashboard.routes");
const devRoutes = require("./modules/dev/dev.routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/dev", devRoutes);
app.get("/", (req, res) => {
	res.json({ message: "API resto-mvp OK" });
});

app.use("/products", productRoutes);
app.use("/stock-movements", stockMovementRoutes);
app.use("/dashboard", dashboardRoutes);

module.exports = app;
