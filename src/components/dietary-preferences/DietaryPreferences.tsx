import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DietaryPreferences.css";

const DietaryPreferences: React.FC = () => {
	const [selectedPreference, setSelectedPreference] = useState<string | null>(
		null,
	); // Store selected dietary preference
	const navigate = useNavigate();

	// Handle preference change
	const handlePreferenceChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setSelectedPreference(event.target.value);
	};

	const handleContinue = () => {
		if (selectedPreference) {
			navigate("/goals"); // Navigate to the next section
		} else {
			alert("Please select a dietary preference.");
		}
	};

	const handleBack = () => {
		navigate("/weight-height"); // Navigate back to the weight-height section
	};

	return (
		<div className="dietary-preferences-container">
			<h2 className="dietary-preferences-title">Dietary Preferences</h2>
			<p className="dietary-preferences-text">Select your dietary preference</p>
			<form className="dietary-preferences-form">
				<div className="dietary-preferences-select">
					<label htmlFor="dietary-preference">Dietary Preference</label>
					<select
						id="dietary-preference"
						value={selectedPreference || ""}
						onChange={handlePreferenceChange}
						className="dietary-preferences-dropdown"
					>
						<option value="">Choose</option>
						<option value="Vegetarian">Vegetarian</option>
						<option value="Vegan">Vegan</option>
						<option value="Gluten-Free">Gluten-Free</option>
						<option value="Dairy-Free">Dairy-Free</option>
						<option value="Nut-Free">Nut-Free</option>
					</select>
				</div>
				<div className="dietary-preferences-buttons">
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

export default DietaryPreferences;
