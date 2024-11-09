// SignIn.tsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"; // Add styles for the form

const SignUp: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const navigate = useNavigate();

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword); // Toggle the visibility of the password
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		if (!email || !password || !confirmPassword) {
			setError("Please fill in all fields.");
			return;
		}
		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}
		console.log("Signed up:", { email, password });
		navigate("/personal-info");
	};

	return (
		<div className="sign-in-container">
			<div className="sign-in-content">
				<h3>WellNest</h3>
				<h2>Sign up</h2>
				<p>Enter your email and create your password to sign up</p>
			</div>
			<div className="sign-in-box">
				<form onSubmit={handleSubmit} className="sign-in-form">
					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder="Enter your email"
							required
						/>
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<div className="password-container">
							<input
								type={showPassword ? "text" : "password"} // Show/hide password based on state
								id="password"
								value={password}
								onChange={e => setPassword(e.target.value)}
								placeholder="Enter your password"
								required
							/>
							{/* Eye icon that toggles visibility */}
							<span onClick={togglePasswordVisibility} className="eye-icon">
								{showPassword ? (
									<FaEyeSlash size={20} color="black" />
								) : (
									<FaEye size={20} color="black" />
								)}
							</span>
						</div>
					</div>
					<div className="input-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<div className="password-container">
							<input
								type={showPassword ? "text" : "password"}
								id="confirmPassword"
								value={confirmPassword}
								onChange={e => setConfirmPassword(e.target.value)}
								placeholder="Confirm your password"
								required
							/>
							<span onClick={togglePasswordVisibility} className="eye-icon">
								{showPassword ? (
									<FaEyeSlash size={20} color="black" />
								) : (
									<FaEye size={20} color="black" />
								)}
							</span>
						</div>
					</div>
					{error && <div className="error-message">{error}</div>}
					<button type="submit" className="submit-btn">
						Sign up
					</button>
					<div className="sign-up-link">
						<p className="sign-up-text">
							Don't have an account?{" "}
							<Link to="/" className="link">
								Login
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
