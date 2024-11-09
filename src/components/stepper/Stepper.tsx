// src/components/stepper/Stepper.tsx
import React from "react";
import "./Stepper.css";

const Stepper: React.FC<{ currentStep: number }> = ({ currentStep }) => {
	return (
		<div className="stepper-container">
			{Array.from({ length: 6 }).map((_, index) => (
				<div
					key={index}
					className={`step ${index <= currentStep ? "active" : ""}`}
				></div>
			))}
		</div>
	);
};

export default Stepper;
