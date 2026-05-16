const API_BASE_URL = "http://localhost:3000";

export async function apiFetch(endpoint, options = {}) {
	const response = await fetch(`${API_BASE_URL}${endpoint}`, {
		headers: {
			"Content-Type": "application/json",
			...options.headers,
		},
		...options,
	});

	if (!response.ok) {
		throw new Error("Erreur lors de l'appel API");
	}

	return response.json();
}
