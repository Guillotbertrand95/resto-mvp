import { apiFetch } from "./api";

export function getProducts() {
	return apiFetch("/products");
}

export async function createProduct(product) {
	return apiFetch("/products", {
		method: "POST",
		body: JSON.stringify(product),
	});
}
