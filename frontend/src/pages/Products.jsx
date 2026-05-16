import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import { createProduct, getProducts } from "../services/productService";
import "../styles/Products.css";

function Products() {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");

	async function loadProducts() {
		try {
			const data = await getProducts();
			setProducts(data);
		} catch (err) {
			setError("Impossible de charger les produits");
		}
	}

	useEffect(() => {
		loadProducts();
	}, []);

	async function handleProductCreated(product) {
		await createProduct(product);
		await loadProducts();
	}

	const categories = ["all", ...new Set(products.map((p) => p.category))];

	const filteredProducts =
		selectedCategory === "all"
			? products
			: products.filter((p) => p.category === selectedCategory);

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<section className="products">
			<h1>Produits</h1>

			<ProductForm onProductCreated={handleProductCreated} />

			<div className="products__filters">
				<label>Filtrer par catégorie :</label>

				<select
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
				>
					{categories.map((cat) => (
						<option key={cat} value={cat}>
							{cat === "all" ? "Toutes les catégories" : cat}
						</option>
					))}
				</select>
			</div>

			<table className="products__table">
				<thead>
					<tr>
						<th>Nom</th>
						<th>Unité</th>
						<th>Stock actuel</th>
						<th>Seuil d’alerte</th>
						<th>Statut</th>
						<th>Catégorie</th>
						<th>Prix moyen</th>
					</tr>
				</thead>

				<tbody>
					{filteredProducts.map((product) => (
						<tr key={product.id}>
							<td>{product.name}</td>
							<td>{product.unit}</td>
							<td>{product.currentStock}</td>
							<td>{product.alertThreshold}</td>
							<td>
								{product.currentStock <=
								product.alertThreshold ? (
									<span className="products__badge products__badge--alert">
										Stock bas
									</span>
								) : (
									<span className="products__badge products__badge--ok">
										OK
									</span>
								)}
							</td>
							<td>{product.category}</td>
							<td>
								{product.averagePrice !== null
									? `${product.averagePrice.toFixed(2)} €`
									: "-"}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}

export default Products;
