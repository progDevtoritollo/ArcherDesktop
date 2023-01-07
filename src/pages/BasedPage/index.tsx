import { Route, Routes, Navigate } from "react-router-dom";

import TestPage from "pages/test"
import Dashboard from "pages/Dashboard"
import Menu from "widgets/Menu"

import "./index.scss"

const BasedPage = () => {
	return (
		<div className="root">

			<div className="menu__container"><Menu /></div>


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