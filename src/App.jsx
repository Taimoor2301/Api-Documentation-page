import React from "react";
import Documentation from "./pages/Docs/Documentation";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Privacy from "./pages/privacy policy/Privacy";
import Dashboard from "./pages/profile/Dashboard";
import ForgetPassword from "./pages/auth/ForgetPassword";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/docs'
					element={<Documentation />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<Signup />}
				/>
				<Route
					path='/privacy'
					element={<Privacy />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>
				<Route
					path='/forgetpassword'
					element={<ForgetPassword />}
				/>

				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</>
	);
}
