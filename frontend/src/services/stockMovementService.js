import { apiFetch } from "./api";

export function getStockMovements() {
	return apiFetch("/stock-movements");
}

export function createStockMovement(movement) {
	return apiFetch("/stock-movements", {
		method: "POST",
		body: JSON.stringify(movement),
	});
}
