import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import "../styles/AppLayout.css";

function AppLayout() {
	return (
		<div className="app-layout">
			<Navigation />

			<main className="app-layout__content">
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
