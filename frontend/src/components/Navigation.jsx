import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
	return (
		<aside className="navigation">
			<h2 className="navigation__logo">Resto Stock</h2>

			<nav className="navigation__menu">
				<NavLink to="/" className="navigation__link">
					Dashboard
				</NavLink>

				<NavLink to="/products" className="navigation__link">
					Produits
				</NavLink>

				<NavLink to="/stock-movements" className="navigation__link">
					Mouvements
				</NavLink>
			</nav>
		</aside>
	);
}

export default Navigation;
