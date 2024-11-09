import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Loader from "./components/loader/Loader";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp"; 
import PersonalInfo from "./components/personal-info/PersonalInfo";
import "./App.css";

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Show loader for 2 seconds, then proceed to login
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer); // Clean up the timer on component unmount
	}, []);

	return (
		<Router>
			<div className="App">
				{loading ? (
					<Loader />
				) : (
					<Routes>
						<Route path="/" element={<SignIn />} />
						<Route path="/sign-up" element={<SignUp />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
					</Routes>
				)}
			</div>
		</Router>
	);
};

export default App;
