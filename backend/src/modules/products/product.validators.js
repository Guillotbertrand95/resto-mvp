function validateCreateProduct(data) {
	if (!data.name || typeof data.name !== "string") {
		return "Le nom du produit est obligatoire";
	}

	if (!data.unit || typeof data.unit !== "string") {
		return "L'unité du produit est obligatoire";
	}

	if (
		data.currentStock !== undefined &&
		typeof data.currentStock !== "number"
	) {
		return "Le stock actuel doit être un nombre";
	}

	if (
		data.alertThreshold !== undefined &&
		typeof data.alertThreshold !== "number"
	) {
		return "Le seuil d'alerte doit être un nombre";
	}

	if (
		data.averagePrice !== undefined &&
		typeof data.averagePrice !== "number"
	) {
		return "Le prix moyen doit être un nombre";
	}

	return null;
}

module.exports = {
	validateCreateProduct,
};
