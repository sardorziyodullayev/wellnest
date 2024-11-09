// src/components/personal-info/PersonalInfo.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./PersonalInfo.css"

interface PersonalInfoProps {
	nextStep: () => void; 
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ nextStep }) => {
	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");
	const navigate = useNavigate(); 
	const handleContinue = () => {
		if (name && surname) {
			nextStep(); 
		}
	};

	const handleBack = () => {
		navigate("/sign-up"); 
	};

	return (
		<div className="personal-info-container" style={{background: "#fff"}}>
			<h2 className="personal-info-title">Personal informations</h2>
         <p className="personal-info-text">Enter your surname and name</p>
			<form className="personal-info-form">
				<div className="personal-info-input">
					<label>Surname</label>
					<input
						type="text"
						value={surname}
						onChange={e => setSurname(e.target.value)}
                  placeholder="Enter surname"
						required
					/>
				</div>
				<div className="personal-info-input">
					<label>Name</label>
					<input
						type="text"
						value={name}
						onChange={e => setName(e.target.value)}
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
