import { apiFetch } from "./api";

export function getStockMovements() {
	return apiFetch("/stock-movements");
}
