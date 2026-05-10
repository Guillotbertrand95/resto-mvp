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

	const newStock =
		type === "IN" ? product.currentStock + qty : product.currentStock - qty;

	const movement = await stockMovementRepository.createMovement({
		productId,
		type,
		quantity: qty,
		unitPrice: unitPrice ? Number(unitPrice) : null,
	});

	await prisma.product.update({
		where: { id: productId },
		data: {
			currentStock: newStock,
		},
	});

	return movement;
};

module.exports = {
	createMovement,
};
