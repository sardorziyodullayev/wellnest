// src/App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import DateOfBirth from "./components/date-of-birth/DateOfBirth";
import Gender from "./components/gender/Gender";
import WeightHeight from "./components/weight-height/WeightHeight";
import DietaryPreferences from "./components/dietary-preferences/DietaryPreferences";
import Goals from "./components/goals/Goals";
import MealPlan from "./components/meal-plan/MealPlan";
import "./App.css";

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
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
						<Route path="/date-of-birth" element={<DateOfBirth />} />
						<Route path="/gender" element={<Gender />} />
						<Route path="/weight-height" element={<WeightHeight />} />
						<Route path="/dietary-preferences" element={<DietaryPreferences />} />
						<Route path="/goals" element={<Goals />} />
						<Route path="/mean-plan" element={<MealPlan />} />
					</Routes>
				)}
			</div>
		</Router>
	);
};

export default App;
