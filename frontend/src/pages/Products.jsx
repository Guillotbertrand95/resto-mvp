import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import { createProduct, getProducts } from "../services/productService";
import "../styles/Products.css";

function Products() {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState("");

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

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<section className="products">
			<h1>Produits</h1>

			<ProductForm onProductCreated={handleProductCreated} />

			<table className="products__table">
				<thead>
					<tr>
						<th>Nom</th>
						<th>Unité</th>
						<th>Stock actuel</th>
						<th>Seuil d’alerte</th>
						<th>Prix moyen</th>
					</tr>
				</thead>

				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td>{product.name}</td>
							<td>{product.unit}</td>
							<td>{product.currentStock}</td>
							<td>{product.alertThreshold}</td>
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
