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
import EnterVarificationCode from "./pages/auth/EnterVarificationCode";
import NewPassword from "./pages/auth/NewPassword";
import AuthLayout from "./pages/auth/AuthLayout";

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
					path='/privacy'
					element={<Privacy />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>

				<Route
					path='/auth'
					element={<AuthLayout />}>
					<Route
						path='login'
						element={<Login />}
					/>
					<Route
						path='signup'
						element={<Signup />}
					/>
					<Route
						path='forgetpassword'
						element={<ForgetPassword />}
					/>
					<Route
						path='verifycode'
						element={<EnterVarificationCode />}
					/>
					<Route
						path='newpassword'
						element={<NewPassword />}
					/>
				</Route>

				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</>
	);
}
