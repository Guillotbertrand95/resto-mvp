import { useEffect, useState } from "react";
import KpiCard from "../components/KpiCard";
import { getDashboardStats } from "../services/dashboardService";
import StockMovements from "./StockMovements";

import "../styles/Dashboard.css";

function Dashboard() {
	const [stats, setStats] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		async function loadStats() {
			try {
				const data = await getDashboardStats();
				setStats(data);
			} catch (err) {
				setError("Impossible de charger le dashboard");
			}
		}

		loadStats();
	}, []);

	if (error) {
		return <p>{error}</p>;
	}

	if (!stats) {
		return <p>Chargement du dashboard...</p>;
	}

	return (
		<section className="dashboard">
			<h1>Dashboard</h1>

			<div className="dashboard__grid">
				<KpiCard
					title="Valeur des entrées"
					value={`${stats.totalInValue.toFixed(2)} €`}
				/>

				<KpiCard
					title="Valeur des sorties"
					value={`${stats.totalOutValue.toFixed(2)} €`}
				/>

				<KpiCard
					title="Valeur stock actuel"
					value={`${stats.currentStockValue.toFixed(2)} €`}
				/>
			</div>
		</section>
	);
}

export default Dashboard;
