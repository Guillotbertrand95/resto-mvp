const express = require("express");
const cors = require("cors");

const productRoutes = require("./modules/products/product.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "API resto-mvp OK" });
});

app.use("/products", productRoutes);

module.exports = app;
