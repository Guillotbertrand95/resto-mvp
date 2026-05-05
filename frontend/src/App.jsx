import { useEffect, useState } from "react";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/products")
			.then((res) => res.json())
			.then((data) => {
				console.log("Produits :", data);
				setProducts(data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div style={{ padding: 20 }}>
			<h1>Produits</h1>

			{products.length === 0 ? (
				<p>Aucun produit</p>
			) : (
				products.map((product) => (
					<div
						key={product.id}
						style={{
							border: "1px solid #ccc",
							marginBottom: 10,
							padding: 10,
						}}
					>
						<h3>{product.name}</h3>
						<p>Stock : {product.currentStock}</p>
						<p>Unité : {product.unit}</p>
					</div>
				))
			)}
		</div>
	);
}

export default App;
