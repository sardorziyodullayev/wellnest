import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MealPlan.css";

const MealPlan: React.FC = () => {
	const [activeDay, setActiveDay] = useState(1); // Default to Day 1
	const navigate = useNavigate();

	const handleContinue = () => {
		navigate("/next-section"); // Navigate to the next section
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
							{mealPlans[activeDay].breakfast.name}
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
							{mealPlans[activeDay].lunch.name}
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
							{mealPlans[activeDay].dinner.name}
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
   };
   lunch: {
      id: number;
      name: string;
      description: string;
      protein: string;
      carbs: string;
      fats: string;
   };
   dinner: {
      id: number;
      name: string;
      description: string;
      protein: string;
      carbs: string;
      fats: string;
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
   },
   lunch: {
      id: 2,
      name: "Grilled chicken with vegetables",
      description: "350kcal • 200g",
      protein: "Protein - 60g",
      carbs: "Carbohydrates - 50g",
      fats: "Fats - 20g",
   },
   dinner: {
      id: 3,
      name: "Baked salmon with salad",
      description: "300kcal • 180g",
      protein: "Protein - 45g",
      carbs: "Carbohydrates - 30g",
      fats: "Fats - 25g",
   },
},
2: {
   breakfast: {
      id: 4,
      name: "Greek yogurt with honey and berries",
      description: "250kcal • 180g",
      protein: "Protein - 30g",
      carbs: "Carbohydrates - 40g",
      fats: "Fats - 10g",
   },
   lunch: {
      id: 5,
      name: "Quinoa salad with chickpeas",
      description: "400kcal • 220g",
      protein: "Protein - 35g",
      carbs: "Carbohydrates - 60g",
      fats: "Fats - 15g",
   },
   dinner: {
      id: 6,
      name: "Stir-fried tofu with rice",
      description: "350kcal • 210g",
      protein: "Protein - 30g",
      carbs: "Carbohydrates - 55g",
      fats: "Fats - 20g",
   },
},
3: {
   breakfast: {
      id: 7,
      name: "Smoothie with spinach and banana",
      description: "180kcal • 160g",
      protein: "Protein - 25g",
      carbs: "Carbohydrates - 35g",
      fats: "Fats - 5g",
   },
   lunch: {
      id: 8,
      name: "Turkey wrap with mixed greens",
      description: "320kcal • 200g",
      protein: "Protein - 45g",
      carbs: "Carbohydrates - 50g",
      fats: "Fats - 12g",
   },
   dinner: {
      id: 9,
      name: "Veggie pasta with marinara sauce",
      description: "280kcal • 220g",
      protein: "Protein - 20g",
      carbs: "Carbohydrates - 50g",
      fats: "Fats - 15g",
   },
},
};