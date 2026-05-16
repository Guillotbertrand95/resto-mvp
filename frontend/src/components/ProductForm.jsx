import { useState } from "react";
import "../styles/ProductForm.css";

function ProductForm({ onProductCreated }) {
	const [formData, setFormData] = useState({
		name: "",
		unit: "",
		alertThreshold: "",
		category: "",
	});

	const [error, setError] = useState("");

	function handleChange(event) {
		const { name, value } = event.target;

		setFormData({
			...formData,
			[name]: value,
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			setError("");

			await onProductCreated({
				name: formData.name,
				unit: formData.unit,
				alertThreshold: Number(formData.alertThreshold),
				category: formData.category,
			});

			setFormData({
				name: "",
				unit: "",
				alertThreshold: "",
				category: "",
			});
		} catch (err) {
			setError("Impossible de créer le produit");
		}
	}

	return (
		<form className="product-form" onSubmit={handleSubmit}>
			<h2>Ajouter un produit</h2>

			<input
				name="name"
				placeholder="Nom du produit"
				value={formData.name}
				onChange={handleChange}
			/>

			<input
				name="unit"
				placeholder="Unité ex: kg, L, pièce"
				value={formData.unit}
				onChange={handleChange}
			/>

			<input
				name="alertThreshold"
				type="number"
				placeholder="Seuil d’alerte"
				value={formData.alertThreshold}
				onChange={handleChange}
			/>
			<input
				name="category"
				placeholder="Catégorie (ex: viande, crémerie...)"
				value={formData.category}
				onChange={handleChange}
			/>
			<button type="submit">Ajouter</button>

			{error && <p className="product-form__error">{error}</p>}
		</form>
	);
}

export default ProductForm;
