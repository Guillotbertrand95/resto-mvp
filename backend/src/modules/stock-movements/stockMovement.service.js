const prisma = require("../../prisma/client");
const stockMovementRepository = require("./stockMovement.repository");

const createMovement = async (data) => {
	const { productId, type, quantity, unitPrice } = data;

	if (!productId) {
		throw new Error("Le produit est obligatoire");
	}

	if (!type || !["IN", "OUT"].includes(type)) {
		throw new Error("Le type doit être IN ou OUT");
	}

	const qty = Number(quantity);

	if (isNaN(qty) || qty <= 0) {
		throw new Error("La quantité doit être un nombre supérieur à 0");
	}

	const product = await prisma.product.findUnique({
		where: { id: productId },
	});

	if (!product) {
		throw new Error("Produit introuvable");
	}

	if (type === "OUT" && product.currentStock < qty) {
		throw new Error("Stock insuffisant");
	}

	const oldStock = Number(product.currentStock);
	const oldAveragePrice = Number(product.averagePrice || 0);

	const newStock = type === "IN" ? oldStock + qty : oldStock - qty;

	let newAveragePrice = product.averagePrice;

	if (type === "IN") {
		const price = Number(unitPrice);

		if (isNaN(price) || price <= 0) {
			throw new Error(
				"Le prix unitaire est obligatoire pour une entrée de stock",
			);
		}

		if (product.averagePrice === null || oldStock === 0) {
			newAveragePrice = price;
		} else {
			newAveragePrice =
				(oldStock * oldAveragePrice + qty * price) / newStock;
		}
	}

	const result = await prisma.$transaction(async (tx) => {
		const movementUnitPrice =
			type === "IN" ? Number(unitPrice) : product.averagePrice;

		const movement = await tx.stockMovement.create({
			data: {
				productId,
				type,
				quantity: qty,
				unitPrice: movementUnitPrice,
			},
		});

		const updatedProduct = await tx.product.update({
			where: { id: productId },
			data: {
				currentStock: newStock,
				averagePrice: newAveragePrice,
			},
		});

		return {
			movement: {
				...movement,
				totalValue: movement.quantity * movement.unitPrice,
			},
			product: updatedProduct,
		};
	});

	return result;
};
async function getAllStockMovements() {
	const movements = await stockMovementRepository.findAll();

	return movements.map((movement) => ({
		...movement,
		totalValue: movement.unitPrice
			? movement.quantity * movement.unitPrice
			: null,
	}));
}
module.exports = {
	createMovement,
	getAllStockMovements,
};
