// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";


const TestPage = lazy(() => import("./test"));

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<TestPage />} />
				<Navigate to="/" />
			</Routes>
		</BrowserRouter>
	);
};