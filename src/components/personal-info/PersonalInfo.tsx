// src/components/personal-info/PersonalInfo.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const PersonalInfo: React.FC = () => {
	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");
	const navigate = useNavigate(); // Hook to navigate

	const handleBack = () => {
		navigate("/sign-up"); // Navigate back to the signup page
	};

	const handleContinue = () => {
		// Handle submission of personal info (e.g., save to backend)
		console.log("Personal info submitted:", { surname, name });
		// Navigate to next step or dashboard
		navigate("/dashboard"); // Example: navigate to dashboard
	};

	return (
		<div className="personal-info-container">
			<h2>Personal Information</h2>
			<form>
				<div>
					<label>Surname</label>
					<input
						type="text"
						value={surname}
						onChange={e => setSurname(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Name</label>
					<input
						type="text"
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
				</div>
				<div className="buttons">
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

export default PersonalInfo;
