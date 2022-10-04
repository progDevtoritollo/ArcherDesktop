// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import TestPage from "./test"
import TestPage2 from "./test copy"


// const TestPage = lazy(() => import("./test"));
// const TestPage2 = lazy(() => import("./test2"));


export const Routing = () => {
	return (
		<Routes>
			<Route path="/test2" element={<TestPage2 />} />

			<Route path="/*" element={<TestPage />} />
		</Routes>
	);
};