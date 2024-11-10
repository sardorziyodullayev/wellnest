// import React from "react";
// import { useParams } from "react-router-dom";
// import { mealPlans } from "../meal-plan/MealPlan"; // Assuming this data is exported from MealPlan component
// import "./MealDetail.css"; // Optional, for styling

// const MealDetail: React.FC = () => {
// 	// Get the meal ID from the URL parameters
// 	const { mealId } = useParams<{ mealId: string }>();
// 	const mealIdNum = parseInt(mealId || "0", 10); // Convert the mealId to a number

// 	// Find the meal plan details based on the mealId
// 	const mealDetails = Object.values(mealPlans)
// 		.flatMap((day) => [day.breakfast, day.lunch, day.dinner]) // Flatten the meal days
// 		.find((meal) => meal.id === mealIdNum); // Find the meal by ID

// 	// If no meal is found, render a fallback message
// 	if (!mealDetails) {
// 		return <p>Meal not found.</p>;
// 	}

// 	return (
// 		<div className="meal-detail-container">
// 			<h2 className="meal-detail-title">{mealDetails.name}</h2>
// 			<img
// 				className="meal-detail-image"
// 				src={`/images/${mealDetails.image}`} // Assuming the images are stored in public/images
// 				alt={mealDetails.name}
// 			/>
// 			<p className="meal-detail-description">{mealDetails.description}</p>
// 			<div className="meal-detail-nutrition">
// 				<p><strong>Protein:</strong> {mealDetails.protein}</p>
// 				<p><strong>Carbs:</strong> {mealDetails.carbs}</p>
// 				<p><strong>Fats:</strong> {mealDetails.fats}</p>
// 			</div>
// 			<div className="meal-detail-benefits">
// 				<h3>Benefits</h3>
// 				<p>{mealDetails.benefits}</p>
// 			</div>
// 			<div className="meal-detail-ingredients">
// 				<h3>Ingredients</h3>
// 				<p>{mealDetails.ingredients}</p>
// 			</div>
// 		</div>
// 	);
// };

// export default MealDetail;
