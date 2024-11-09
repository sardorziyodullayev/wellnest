// SignIn.tsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SignIn.css"; // Add styles for the form

const SignIn: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword); // Toggle the visibility of the password
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		// Simple form validation
		if (!email || !password) {
			setError("Please fill in both fields.");
			return;
		}

		try {
			const response = await fetch("http://localhost:4000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				// Handle successful login (e.g., store token)
				localStorage.setItem("authToken", data.token); // Example of storing the token
				window.location.href = "/dashboard"; // Redirect to dashboard
			} else {
				setError(data.message || "Login failed");
			}
		} catch (error) {
			setError("An error occurred. Please try again.");
		}
	};

	return (
		<div className="sign-in-container">
			<div className="sign-in-content">
				<h3>WellNest</h3>
				<h2>Sign in to your account</h2>
				<p>Enter your email and password to login</p>
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
					{error && <div className="error-message">{error}</div>}
					<button type="submit" className="submit-btn">
						Login
					</button>
					<div className="sign-up-link">
						<p className="sign-up-text">
							Don't have an account?{" "}
							<Link to="/sign-up" className="link">
								Sign up
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
