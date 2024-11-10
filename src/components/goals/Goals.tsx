import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Goals.css";

const Goals: React.FC = () => {
	const [selectedGoal, setSelectedGoal] = useState<string | null>(null); // Store selected goal
	const navigate = useNavigate();

	// Handle goal change
	const handleGoalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedGoal(event.target.value);
	};

	const handleContinue = () => {
		if (selectedGoal) {
			navigate("/mean-plan"); // Navigate to the next section
		} else {
			alert("Please select a goal.");
		}
	};

	const handleBack = () => {
		navigate("/dietary-preferences"); // Navigate back to the dietary preferences section
	};

	return (
		<div className="goals-container">
			<h2 className="goals-title">Goals</h2>
			<p className="goals-text">Choose your goals</p>
			<form className="goals-form">
				<div className="goals-select">
					<label htmlFor="goal">Goals</label>
					<select
						id="goal"
						value={selectedGoal || ""}
						onChange={handleGoalChange}
						className="goals-dropdown"
					>
						<option value="" disabled>Choose</option>
						<option value="Lose Weight">Lose Weight</option>
						<option value="Build Muscle">Build Muscle</option>
						<option value="Improve Fitness">Improve Fitness</option>
						<option value="Maintain Health">Maintain Health</option>
					</select>
				</div>
				<div className="goals-buttons">
					<button type="button" onClick={handleBack}>
						Back
					</button>
					<button type="button" onClick={handleContinue}>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
};

export default Goals;
