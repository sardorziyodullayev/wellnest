
const OneDay = () => {
	return (
		<div className="meal-plan-content">
			{/* Each day’s meal plan can be detailed here */}
			<div className="meal-day">
				<h3>Day 1</h3>
				<ul>
					<li>Breakfast: Oatmeal with fruits</li>
					<li>Lunch: Grilled chicken with vegetables</li>
					<li>Dinner: Baked salmon with salad</li>
				</ul>
			</div>
			<div className="meal-day">
				<h3>Day 2</h3>
				<ul>
					<li>Breakfast: Greek yogurt with honey and berries</li>
					<li>Lunch: Quinoa salad with chickpeas</li>
					<li>Dinner: Stir-fried tofu with rice</li>
				</ul>
			</div>
			<div className="meal-day">
				<h3>Day 3</h3>
				<ul>
					<li>Breakfast: Smoothie with spinach and banana</li>
					<li>Lunch: Turkey wrap with mixed greens</li>
					<li>Dinner: Veggie pasta with marinara sauce</li>
				</ul>
			</div>
		</div>
	);
};

export default OneDay;
