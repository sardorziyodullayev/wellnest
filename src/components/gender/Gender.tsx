// src/components/gender/Gender.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Male from "../../assets/icons/male.svg";
import Female from "../../assets/icons/female.svg";
import "./Gender.css";

const Gender: React.FC = () => {
	const [selectedGender, setSelectedGender] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleContinue = () => {
		if (selectedGender) {
			navigate("/weight-height");
		} else {
			alert("Please select a gender.");
		}
	};

	const handleBack = () => {
		navigate("/date-of-birth");
	};

	return (
		<div className="gender-container">
			<h2 className="gender-title">Gender</h2>
			<p className="gender-text">Choose your gender</p>
			<form className="gender-form">
				<div className="gender-options">
					{/* Male Option */}
					<div className="gender-content">
						<img src={Male} alt="Male icon" />
						<label>
							<input
								type="radio"
								name="gender"
								value="Male"
								checked={selectedGender === "Male"}
								onChange={e => setSelectedGender(e.target.value)}
							/>
							<span className="gender-span">Male</span>
						</label>
					</div>

					{/* Female Option */}
					<div className="gender-content">
						<img src={Female} alt="Female icon" />
						<label>
							<input
								type="radio"
								name="gender"
								value="Female"
								checked={selectedGender === "Female"}
								onChange={e => setSelectedGender(e.target.value)}
							/>
							<span className="gender-span">Female</span>
						</label>
					</div>
				</div>
				<div className="gender-buttons">
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

export default Gender;
