
import { Route, Routes } from "react-router-dom";
import TestPage from "./test"
import Dashboard from "./Dashboard"

export const Routing = () => {
	return (
		<Routes>
			<Route path="/dashboard" element={<Dashboard />} />

			<Route path="/" element={<TestPage />} />
		</Routes>
	);
};