// Recipe data - Foundation for all 4 parts
const recipes = [
	{
		id: 1,
		title: "Classic Spaghetti Carbonara",
		time: 25,
		difficulty: "easy",
		description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
		category: "pasta"
	},
	{
		id: 2,
		title: "Chicken Tikka Masala",
		time: 45,
		difficulty: "medium",
		description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
		category: "curry"
	},
	{
		id: 3,
		title: "Homemade Croissants",
		time: 180,
		difficulty: "hard",
		description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
		category: "baking"
	},
	{
		id: 4,
		title: "Greek Salad",
		time: 15,
		difficulty: "easy",
		description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
		category: "salad"
	},
	{
		id: 5,
		title: "Beef Wellington",
		time: 120,
		difficulty: "hard",
		description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
		category: "meat"
	},
	{
		id: 6,
		title: "Vegetable Stir Fry",
		time: 20,
		difficulty: "easy",
		description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
		category: "vegetarian"
	},
	{
		id: 7,
		title: "Pad Thai",
		time: 30,
		difficulty: "medium",
		description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
		category: "noodles"
	},
	{
		id: 8,
		title: "Margherita Pizza",
		time: 60,
		difficulty: "medium",
		description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
		category: "pizza"
	}
];

// DOM Selection - Get the container where recipes will be displayed
const recipeContainer = document.querySelector('#recipe-container');
console.log('recipeContainer:', recipeContainer);

// Function to create HTML for a single recipe card
const createRecipeCard = (recipe) => {
	return `
		<div class="recipe-card" data-id="${recipe.id}">
			<h3>${recipe.title}</h3>
			<div class="recipe-meta">
				<span>⏱️ ${recipe.time} min</span>
				<span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
			</div>
			<p>${recipe.description}</p>
		</div>
	`;
};

console.log('First recipe card HTML:', createRecipeCard(recipes[0]));

// Wrap everything in an IIFE module to keep internals private
const RecipeApp = (function () {
	console.log('RecipeApp initializing...');

	// Enhanced recipe data with ingredients and steps (some nested)
	const recipes = [
		{
			id: 1,
			title: 'Classic Spaghetti Carbonara',
			time: 25,
			difficulty: 'easy',
			description: 'A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.',
			category: 'pasta',
			ingredients: ['Spaghetti', 'Eggs', 'Pecorino Romano', 'Pancetta', 'Black pepper'],
			steps: [
				'Boil water and cook spaghetti until al dente',
				'Fry pancetta until crisp',
				{ text: 'Prepare sauce', substeps: ['Beat eggs with cheese', 'Season with pepper'] },
				'Combine pasta with pancetta and remove from heat',
				'Toss quickly with egg-cheese mixture and serve'
			]
		},
		{
			id: 2,
			title: 'Chicken Tikka Masala',
			time: 45,
			difficulty: 'medium',
			description: 'Tender chicken pieces in a creamy, spiced tomato sauce.',
			category: 'curry',
			ingredients: ['Chicken', 'Yogurt', 'Tomato puree', 'Garam masala', 'Cream'],
			steps: [
				'Marinate chicken in spices and yogurt',
				'Grill or pan-fry chicken pieces',
				'Make sauce by sautéing onions and spices',
				'Add tomato puree and simmer',
				'Add chicken to sauce and finish with cream'
			]
		},
		{
			id: 3,
			title: 'Homemade Croissants',
			time: 180,
			difficulty: 'hard',
			description: 'Buttery, flaky French pastries that require patience but deliver amazing results.',
			category: 'baking',
			ingredients: ['Flour', 'Butter', 'Yeast', 'Milk', 'Sugar', 'Salt'],
			steps: [
				'Make basic dough and chill',
				{
					text: 'Laminate dough (folding butter layers)',
					substeps: [
						'Roll dough into rectangle',
						'Place butter slab and fold',
						'Turn and roll several times to create layers'
					]
				},
				'Cut and shape croissants',
				'Proof until doubled',
				'Bake until golden'
			]
		},
		{
			id: 4,
			title: 'Greek Salad',
			time: 15,
			difficulty: 'easy',
			description: 'Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.',
			category: 'salad',
			ingredients: ['Tomatoes', 'Cucumber', 'Feta', 'Olives', 'Olive oil', 'Oregano'],
			steps: ['Chop vegetables', 'Combine in bowl', 'Dress with olive oil and oregano', 'Toss and serve']
		},
		{
			id: 5,
			title: 'Beef Wellington',
			time: 120,
			difficulty: 'hard',
			description: 'Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.',
			category: 'meat',
			ingredients: ['Beef fillet', 'Mushrooms', 'Puff pastry', 'Prosciutto', 'Dijon mustard'],
			steps: [
				'Sear the beef and cool',
				{
					text: 'Make duxelles',
					substeps: ['Chop mushrooms finely', 'Cook until moisture evaporates', 'Season well']
				},
				'Wrap beef with prosciutto and duxelles',
				'Wrap in puff pastry and chill',
				'Bake until pastry is golden'
			]
		},
		{
			id: 6,
			title: 'Vegetable Stir Fry',
			time: 20,
			difficulty: 'easy',
			description: 'Colorful mixed vegetables cooked quickly in a savory sauce.',
			category: 'vegetarian',
			ingredients: ['Broccoli', 'Carrots', 'Bell peppers', 'Soy sauce', 'Garlic', 'Sesame oil'],
			steps: ['Prep vegetables', 'Heat wok with oil', 'Stir-fry vegetables quickly', 'Add sauce and toss', 'Serve with rice']
		},
		{
			id: 7,
			title: 'Pad Thai',
			time: 30,
			difficulty: 'medium',
			description: 'Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.',
			category: 'noodles',
			ingredients: ['Rice noodles', 'Shrimp', 'Eggs', 'Bean sprouts', 'Peanuts', 'Tamarind paste'],
			steps: ['Soak noodles', 'Stir-fry shrimp and eggs', 'Add noodles and sauce', 'Toss with sprouts and peanuts', 'Serve hot']
		},
		{
			id: 8,
			title: 'Margherita Pizza',
			time: 60,
			difficulty: 'medium',
			description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil.',
			category: 'pizza',
			ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Basil', 'Olive oil'],
			steps: ['Prepare dough', 'Spread tomato sauce', 'Add mozzarella and basil', 'Bake until crust is crisp']
		}
	];

	// State for filters/sorts and expanded sections
	let currentFilter = 'all';
	let currentSort = 'none';
	const expandedState = {}; // keys like "1:steps" -> true/false

	// DOM references
	const recipeContainer = document.querySelector('#recipe-container');
	const filterButtons = document.querySelectorAll('[data-filter]');
	const sortButtons = document.querySelectorAll('[data-sort]');

	// Recursive rendering for steps
	const renderSteps = (steps) => {
		if (!steps || !steps.length) return '';

		const renderList = (items) => {
			let html = '<ol class="steps-list">';
			items.forEach(item => {
				if (typeof item === 'string') {
					html += `<li>${item}</li>`;
				} else if (typeof item === 'object' && item !== null) {
					html += `<li>${item.text}`;
					if (item.substeps) {
						html += renderList(item.substeps);
					}
					html += `</li>`;
				}
			});
			html += '</ol>';
			return html;
		};

		return renderList(steps);
	};

	const renderIngredients = (ingredients) => {
		if (!ingredients || !ingredients.length) return '';
		return `<ul class="ingredients-list">${ingredients.map(i => `<li>${i}</li>`).join('')}</ul>`;
	};

	// Create card HTML including toggle buttons and hidden sections
	const createRecipeCard = (recipe) => {
		const stepsVisible = !!expandedState[`${recipe.id}:steps`];
		const ingVisible = !!expandedState[`${recipe.id}:ingredients`];

		return `
			<div class="recipe-card" data-id="${recipe.id}">
				<h3>${recipe.title}</h3>
				<div class="recipe-meta">
					<span>⏱️ ${recipe.time} min</span>
					<span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
				</div>
				<p>${recipe.description}</p>

				<div class="card-controls">
					<button class="toggle-btn" data-toggle="steps" data-recipe-id="${recipe.id}">${stepsVisible ? 'Hide Steps' : 'Show Steps'}</button>
					<button class="toggle-btn" data-toggle="ingredients" data-recipe-id="${recipe.id}">${ingVisible ? 'Hide Ingredients' : 'Show Ingredients'}</button>
				</div>

				<div class="steps-container ${stepsVisible ? 'visible' : ''}" data-steps-id="${recipe.id}">
					${renderSteps(recipe.steps)}
				</div>

				<div class="ingredients-container ${ingVisible ? 'visible' : ''}" data-ingredients-id="${recipe.id}">
					${renderIngredients(recipe.ingredients)}
				</div>
			</div>
		`;
	};

	// Rendering and functional utilities (filters & sorts)
	const renderRecipes = (recipesToRender) => {
		const allCardsHTML = recipesToRender.map(createRecipeCard).join('');
		if (recipeContainer) recipeContainer.innerHTML = allCardsHTML;
	};

	const filterByDifficulty = (items, level) => items.filter(r => r.difficulty === level);
	const filterByTime = (items, maxMinutes) => items.filter(r => r.time <= maxMinutes);
	const applyFilter = (items, filterType) => {
		switch (filterType) {
			case 'easy': return filterByDifficulty(items, 'easy');
			case 'medium': return filterByDifficulty(items, 'medium');
			case 'hard': return filterByDifficulty(items, 'hard');
			case 'quick': return filterByTime(items, 30);
			case 'all':
			default: return [...items];
		}
	};

	const sortByName = (items) => [...items].sort((a, b) => a.title.localeCompare(b.title));
	const sortByTime = (items) => [...items].sort((a, b) => a.time - b.time);
	const applySort = (items, sortType) => {
		switch (sortType) {
			case 'name': return sortByName(items);
			case 'time': return sortByTime(items);
			case 'none':
			default: return [...items];
		}
	};

	const updateActiveButtons = () => {
		filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === currentFilter));
		sortButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.sort === currentSort));
	};

	const updateDisplay = () => {
		let result = [...recipes];
		result = applyFilter(result, currentFilter);
		result = applySort(result, currentSort);
		renderRecipes(result);
		console.log(`Displaying ${result.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
		updateActiveButtons();
	};

	// Event handlers
	const handleFilterClick = (e) => {
		const btn = e.currentTarget;
		const filter = btn.dataset.filter;
		if (!filter) return;
		currentFilter = filter;
		updateDisplay();
	};

	const handleSortClick = (e) => {
		const btn = e.currentTarget;
		const sort = btn.dataset.sort;
		if (!sort) return;
		currentSort = sort;
		updateDisplay();
	};

	// Toggle handling via event delegation on recipeContainer
	const handleToggleClick = (e) => {
		const btn = e.target.closest('.toggle-btn');
		if (!btn) return;
		const toggleType = btn.dataset.toggle; // 'steps' or 'ingredients'
		const recipeId = btn.dataset.recipeId;
		if (!toggleType || !recipeId) return;

		const key = `${recipeId}:${toggleType}`;
		expandedState[key] = !expandedState[key];
		updateDisplay(); // re-render so state is preserved across filters/sorts
	};

	const setupEventListeners = () => {
		filterButtons.forEach(btn => btn.addEventListener('click', handleFilterClick));
		sortButtons.forEach(btn => btn.addEventListener('click', handleSortClick));
		if (recipeContainer) {
			recipeContainer.addEventListener('click', handleToggleClick);
		}
		console.log('Event listeners attached!');
	};

	// Initialize
	setupEventListeners();
	updateDisplay();
	console.log('RecipeApp ready!');

	// Public API
	return {
		init: updateDisplay,
		getState: () => ({ currentFilter, currentSort, expandedState })
	};
})();

// Expose to global for debugging
window.RecipeApp = RecipeApp;
