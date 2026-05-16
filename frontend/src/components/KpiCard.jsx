import "../styles/KpiCard.css";

function KpiCard({ title, value }) {
	return (
		<div className="kpi-card">
			<p className="kpi-card__title">{title}</p>
			<h2 className="kpi-card__value">{value}</h2>
		</div>
	);
}

export default KpiCard;
