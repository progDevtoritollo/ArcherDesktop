
import { Route, Routes, Navigate } from "react-router-dom";

import Auth from "pages/Auth/Auth";
import BasedPage from "pages/BasedPage";

export const Routing = () => {
	const isAuth = true;

	return (
		<div className="wrapper">
			<Routes>
				<Route path="/auth/*" element={isAuth ? <Navigate to="/" /> :
					<Auth />} />

				<Route path="/NotFound" element={<h1 >NotFound</h1>} />

				<Route path="/*" element={isAuth ? <BasedPage /> : <Navigate to="/auth/signin" />} />

			</Routes>
		</div>
	);
};