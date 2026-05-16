import { apiFetch } from "./api";

export function getDashboardStats() {
	return apiFetch("/dashboard/stats");
}
