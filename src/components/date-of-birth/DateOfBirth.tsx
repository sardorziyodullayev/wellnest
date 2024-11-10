// src/components/date-of-birth/DateOfBirth.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DateOfBirth.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateOfBirth: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [selectedMonth, setSelectedMonth] = useState<Date | null>(null);
	const [selectedYear, setSelectedYear] = useState<Date | null>(null);
	const navigate = useNavigate();

	const handleContinue = () => {
		if (selectedDate && selectedMonth && selectedYear) {
			navigate("/gender"); // Replace with the actual next step route
		} else {
			alert("Please select your full date of birth.");
		}
	};

	const handleBack = () => {
		navigate("/personal-info");
	};

	return (
		<div className="date-of-birth-container">
			<h2 className="date-of-birth-title">Date of birth</h2>
			<p className="date-of-birth-text">Choose your date of birth</p>
			<form className="date-of-birth-form">
				<div className="date-of-birth-content">
					<div className="date-of-birth-input">
						<DatePicker
							selected={selectedDate}
							onChange={(date) => setSelectedDate(date)}
							dateFormat="dd"
							showMonthDropdown={false}
							showYearDropdown={false}
							placeholderText="DD"
							dayClassName={() => "day-picker-only"}
						/>
					</div>
					<div className="date-of-birth-input">
						<DatePicker
							selected={selectedMonth}
							onChange={(date) => setSelectedMonth(date)}
							dateFormat="MM"
							showMonthYearPicker
							showFullMonthYearPicker
							placeholderText="MM"
						/>
					</div>
					<div className="date-of-birth-input">
						<DatePicker
							selected={selectedYear}
							onChange={(date) => setSelectedYear(date)}
							dateFormat="yyyy"
							showYearPicker
							placeholderText="YYYY"
						/>
					</div>
				</div>
				<div className="date-buttons">
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

export default DateOfBirth;
