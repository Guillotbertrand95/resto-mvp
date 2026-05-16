const API_BASE_URL = "http://localhost:3000";

export async function apiFetch(endpoint) {
	const response = await fetch(`${API_BASE_URL}${endpoint}`);

	if (!response.ok) {
		throw new Error("Erreur lors de l'appel API");
	}

	return response.json();
}
