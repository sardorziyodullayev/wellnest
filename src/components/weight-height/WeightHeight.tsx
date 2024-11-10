import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WeightHeight.css";

const WeightHeight: React.FC = () => {
	const [weight, setWeight] = useState<number>(60); // Default weight is 60kg
	const [height, setHeight] = useState<number>(170); // Default height is 170cm
	const navigate = useNavigate();

	const handleContinue = () => {
		if (weight && height) {
			navigate("/dietary-preferences"); // Navigate to the next section
		} else {
			alert("Please enter both weight and height.");
		}
	};

	const handleBack = () => {
		navigate("/gender"); // Navigate back to the gender section
	};

	return (
		<div className="weight-height-container">
			<h2 className="weight-height-title">Weight and Height</h2>
			<p className="weight-height-text">Choose your weight and height</p>
			<form className="weight-height-form">
				<div className="weight-height-options">
					<div className="weight-input-group">
						<label htmlFor="weight">Weight (kg)</label>
						<input
							type="range"
							id="weight"
							name="weight"
							min="30"
							max="200"
							value={weight}
							onChange={e => setWeight(Number(e.target.value))}
						/>
						<div className="slider-value">{weight} kg</div>
					</div>
					<div className="weight-input-group">
						<label htmlFor="height">Height (sm)</label>
						<input
							type="range"
							id="height"
							name="height"
							min="100"
							max="220"
							value={height}
							onChange={e => setHeight(Number(e.target.value))}
						/>
						<div className="slider-value">{height} sm</div>
					</div>
				</div>
				<div className="weight-height-buttons">
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

export default WeightHeight;
