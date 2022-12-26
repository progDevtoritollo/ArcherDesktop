import { Route, Routes, Navigate } from "react-router-dom";

import TestPage from "pages/test"
import Dashboard from "pages/Dashboard"
import Menu from "widgets/Menu"

const BasedPage = () => {
	return (
		<div>
			<h1>BasedPage</h1>
			<Menu />

			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/test" element={<TestPage />} />

				<Route
					path="*"
					element={<Navigate to="/NotFound" replace />}
				/>
			</Routes>

			<h1>Sidebar</h1>

			<h1>Footer</h1>
		</div>);
};

export default BasedPage;