import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import StockMovements from "./pages/StockMovements";

import "./styles/global.css";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="/products" element={<Products />} />
					<Route
						path="/stock-movements"
						element={<StockMovements />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
