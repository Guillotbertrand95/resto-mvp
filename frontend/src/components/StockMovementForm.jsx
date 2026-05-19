import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import "../styles/StockMovementForm.css";

function StockMovementForm({ onMovementCreated }) {
	const [products, setProducts] = useState([]);
	const [formData, setFormData] = useState({
		productId: "",
		type: "IN",
		quantity: "",
		unitPrice: "",
		outMode: "quantity",
	});
	const [error, setError] = useState("");

	useEffect(() => {
		async function loadProducts() {
			try {
				const data = await getProducts();
				setProducts(data);
			} catch (err) {
				setError("Impossible de charger les produits");
			}
		}

		loadProducts();
	}, []);

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

			const movement = {
				productId: formData.productId,
				type: formData.type,
			};

			if (formData.type === "IN") {
				movement.quantity = Number(formData.quantity);
				movement.unitPrice = Number(formData.unitPrice);
			}

			if (formData.type === "OUT") {
				if (formData.outMode === "portion") {
					movement.portionCount = Number(formData.quantity);
				} else {
					movement.quantity = Number(formData.quantity);
				}
			}

			await onMovementCreated(movement);

			setFormData({
				productId: "",
				type: "IN",
				quantity: "",
				unitPrice: "",
				outMode: "quantity",
			});
		} catch (err) {
			setError("Impossible de créer le mouvement");
		}
	}

	return (
		<form className="stock-movement-form" onSubmit={handleSubmit}>
			<h2>Ajouter un mouvement</h2>

			<select
				name="productId"
				value={formData.productId}
				onChange={handleChange}
				required
			>
				<option value="">Choisir un produit</option>

				{products.map((product) => (
					<option key={product.id} value={product.id}>
						{product.name} ({product.unit})
					</option>
				))}
			</select>

			<select name="type" value={formData.type} onChange={handleChange}>
				<option value="IN">Entrée</option>
				<option value="OUT">Sortie</option>
			</select>

			{formData.type === "OUT" && (
				<select
					name="outMode"
					value={formData.outMode}
					onChange={handleChange}
				>
					<option value="quantity">Quantité brute</option>
					<option value="portion">Portions</option>
				</select>
			)}

			<input
				name="quantity"
				type="number"
				step="0.01"
				placeholder={
					formData.type === "OUT" && formData.outMode === "portion"
						? "Nombre de portions"
						: "Quantité"
				}
				value={formData.quantity}
				onChange={handleChange}
				required
			/>

			{formData.type === "IN" && (
				<input
					name="unitPrice"
					type="number"
					step="0.01"
					placeholder="Prix unitaire"
					value={formData.unitPrice}
					onChange={handleChange}
					required
				/>
			)}

			<button type="submit">Valider</button>

			{error && <p className="stock-movement-form__error">{error}</p>}
		</form>
	);
}

export default StockMovementForm;
