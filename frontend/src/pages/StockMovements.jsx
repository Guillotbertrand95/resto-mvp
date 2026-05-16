import { useEffect, useState } from "react";
import { getStockMovements } from "../services/stockMovementService";
import "../styles/StockMovements.css";

function StockMovements() {
	const [movements, setMovements] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		async function loadMovements() {
			try {
				const data = await getStockMovements();
				setMovements(data);
			} catch (err) {
				setError("Impossible de charger les mouvements de stock");
			}
		}

		loadMovements();
	}, []);

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<section className="stock-movements">
			<h2>Historique des mouvements</h2>

			<table className="stock-movements__table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Produit</th>
						<th>Type</th>
						<th>Quantité</th>
						<th>Prix unitaire</th>
						<th>Valeur totale</th>
					</tr>
				</thead>

				<tbody>
					{movements.map((movement) => (
						<tr key={movement.id}>
							<td>
								{new Date(
									movement.createdAt,
								).toLocaleDateString("fr-FR")}
							</td>
							<td>{movement.product?.name}</td>
							<td>{movement.type}</td>
							<td>{movement.quantity}</td>
							<td>{movement.unitPrice?.toFixed(2)} €</td>
							<td>{movement.totalValue?.toFixed(2)} €</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}

export default StockMovements;
