import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalInfo.css";

const PersonalInfo: React.FC = () => {
	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const handleContinue = () => {
		if (name && surname) {
			navigate("/date-of-birth"); // Navigate to the date of birth page if fields are filled
		} else {
			alert("Please fill out both Name and Surname fields.");
		}
	};

	const handleBack = () => {
		navigate("/sign-up"); // Navigate back to the sign-up page
	};

	return (
		<div className="personal-info-container">
			<h2 className="personal-info-title">Personal Information</h2>
			<p className="personal-info-text">Enter your surname and name</p>
			<form className="personal-info-form">
				<div className="personal-info-input">
					<label>Surname</label>
					<input
						type="text"
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
						placeholder="Enter surname"
						required
					/>
				</div>
				<div className="personal-info-input">
					<label>Name</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter your name"
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
