import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MealPlan.css";

const MealPlan: React.FC = () => {
	const [activeDay, setActiveDay] = useState(1); // Default to Day 1
	const navigate = useNavigate();

	const handleContinue = () => {
		navigate("/next-section"); // Navigate to the next section
	};

	const handleMoreInfo = (mealId: number) => {
		navigate(`/meal-detail/${mealId}`);
	};

	return (
		<div className="meal-plan-container">
			<h2 className="meal-plan-title">Your Meal Plan</h2>
			<p className="meal-plan-text">
				We have prepared a 3-day meal plan for you. Follow the plan and reach your
				goal!
			</p>

			{/* Tabs for selecting each day */}
			<div className="meal-plan-tabs">
				<button
					className={`meal-plan-tab ${activeDay === 1 ? "active" : ""}`}
					onClick={() => setActiveDay(1)}
				>
					Day 1
				</button>
				<button
					className={`meal-plan-tab ${activeDay === 2 ? "active" : ""}`}
					onClick={() => setActiveDay(2)}
				>
					Day 2
				</button>
				<button
					className={`meal-plan-tab ${activeDay === 3 ? "active" : ""}`}
					onClick={() => setActiveDay(3)}
				>
					Day 3
				</button>
			</div>

			{/* Meal details for the selected day */}
			<div className="meal-details">
				<ul>
					<li>
						<h3 className="meal-title">Breakfast</h3>
						<div className="meal-items">
							<div className="meal-content">
								{mealPlans[activeDay].breakfast.name}
								<button
									className="meal-detail-button"
									onClick={() => handleMoreInfo(mealPlans[activeDay].breakfast.id)}
								>
									More Info
								</button>
							</div>
							<p className="meal-item-title">
								{mealPlans[activeDay].breakfast.description}
							</p>
							<div className="meal-item-box">
								<p>{mealPlans[activeDay].breakfast.protein}</p>
								<p>{mealPlans[activeDay].breakfast.carbs}</p>
								<p>{mealPlans[activeDay].breakfast.fats}</p>
							</div>
						</div>
					</li>
					<li>
						<h3 className="meal-title">Lunch</h3>
						<div className="meal-items">
							<div className="meal-content">
								{mealPlans[activeDay].lunch.name}
								<button
									className="meal-detail-button"
									onClick={() => handleMoreInfo(mealPlans[activeDay].breakfast.id)}
								>
									More Info
								</button>
							</div>
							<p className="meal-item-title">
								{mealPlans[activeDay].lunch.description}
							</p>
							<div className="meal-item-box">
								<p>{mealPlans[activeDay].lunch.protein}</p>
								<p>{mealPlans[activeDay].lunch.carbs}</p>
								<p>{mealPlans[activeDay].lunch.fats}</p>
							</div>
						</div>
					</li>
					<li>
						<h3 className="meal-title">Dinner</h3>
						<div className="meal-items">
							<div className="meal-content">
								{mealPlans[activeDay].dinner.name}
								<button
									className="meal-detail-button"
									onClick={() => handleMoreInfo(mealPlans[activeDay].breakfast.id)}
								>
									More Info
								</button>
							</div>
							<p className="meal-item-title">
								{mealPlans[activeDay].dinner.description}
							</p>
							<div className="meal-item-box">
								<p>{mealPlans[activeDay].dinner.protein}</p>
								<p>{mealPlans[activeDay].dinner.carbs}</p>
								<p>{mealPlans[activeDay].dinner.fats}</p>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<div className="meal-plan-buttons">
				<button type="button" onClick={handleContinue}>
					Regenerate plan
				</button>
			</div>
		</div>
	);
};

export default MealPlan;

// Define the meal plan details for each day with detailed info
const mealPlans: Record<
	number,
	{
		breakfast: {
			id: number;
			name: string;
			description: string;
			protein: string;
			carbs: string;
			fats: string;
			benefits: string;
			ingredients: string;
			image: string;
		};
		lunch: {
			id: number;
			name: string;
			description: string;
			protein: string;
			carbs: string;
			fats: string;
			benefits: string;
			ingredients: string;
			image: string;
		};
		dinner: {
			id: number;
			name: string;
			description: string;
			protein: string;
			carbs: string;
			fats: string;
			benefits: string;
			ingredients: string;
			image: string;
		};
	}
> = {
	1: {
		breakfast: {
			id: 1,
			name: "Salad with egg",
			description: "200kcal • 150g",
			protein: "Protein - 50g",
			carbs: "Carbohydrates - 40g",
			fats: "Fats - 40g",
			benefits: "Rich in protein and low in carbs, great for a light start.",
			ingredients: "Egg, mixed greens, olive oil, vinegar",
			image: "salad_with_egg.jpg",
		},
		lunch: {
			id: 2,
			name: "Grilled chicken with vegetables",
			description: "350kcal • 200g",
			protein: "Protein - 60g",
			carbs: "Carbohydrates - 50g",
			fats: "Fats - 20g",
			benefits: "High in protein and fiber, perfect for muscle recovery.",
			ingredients: "Chicken breast, broccoli, bell peppers, carrots",
			image: "grilled_chicken.jpg",
		},
		dinner: {
			id: 3,
			name: "Baked salmon with salad",
			description: "300kcal • 180g",
			protein: "Protein - 45g",
			carbs: "Carbohydrates - 30g",
			fats: "Fats - 25g",
			benefits: "Rich in Omega-3 fatty acids, supports heart health.",
			ingredients: "Salmon, mixed greens, cherry tomatoes, cucumber",
			image: "baked_salmon.jpg",
		},
	},
	2: {
		breakfast: {
			id: 1,
			name: "Salad with egg",
			description: "200kcal • 150g",
			protein: "Protein - 50g",
			carbs: "Carbohydrates - 40g",
			fats: "Fats - 40g",
			benefits: "Rich in protein and low in carbs, great for a light start.",
			ingredients: "Egg, mixed greens, olive oil, vinegar",
			image: "salad_with_egg.jpg",
		},
		lunch: {
			id: 2,
			name: "Grilled chicken with vegetables",
			description: "350kcal • 200g",
			protein: "Protein - 60g",
			carbs: "Carbohydrates - 50g",
			fats: "Fats - 20g",
			benefits: "High in protein and fiber, perfect for muscle recovery.",
			ingredients: "Chicken breast, broccoli, bell peppers, carrots",
			image: "grilled_chicken.jpg",
		},
		dinner: {
			id: 3,
			name: "Baked salmon with salad",
			description: "300kcal • 180g",
			protein: "Protein - 45g",
			carbs: "Carbohydrates - 30g",
			fats: "Fats - 25g",
			benefits: "Rich in Omega-3 fatty acids, supports heart health.",
			ingredients: "Salmon, mixed greens, cherry tomatoes, cucumber",
			image: "baked_salmon.jpg",
		},
	},
	3: {
		breakfast: {
			id: 1,
			name: "Salad with egg",
			description: "200kcal • 150g",
			protein: "Protein - 50g",
			carbs: "Carbohydrates - 40g",
			fats: "Fats - 40g",
			benefits: "Rich in protein and low in carbs, great for a light start.",
			ingredients: "Egg, mixed greens, olive oil, vinegar",
			image: "salad_with_egg.jpg",
		},
		lunch: {
			id: 2,
			name: "Grilled chicken with vegetables",
			description: "350kcal • 200g",
			protein: "Protein - 60g",
			carbs: "Carbohydrates - 50g",
			fats: "Fats - 20g",
			benefits: "High in protein and fiber, perfect for muscle recovery.",
			ingredients: "Chicken breast, broccoli, bell peppers, carrots",
			image: "grilled_chicken.jpg",
		},
		dinner: {
			id: 3,
			name: "Baked salmon with salad",
			description: "300kcal • 180g",
			protein: "Protein - 45g",
			carbs: "Carbohydrates - 30g",
			fats: "Fats - 25g",
			benefits: "Rich in Omega-3 fatty acids, supports heart health.",
			ingredients: "Salmon, mixed greens, cherry tomatoes, cucumber",
			image: "baked_salmon.jpg",
		},
	},
};
