import React from 'react';

function parseOutput({ aiResponse }) {
  const sections = aiResponse.split('\n\n');zzz // Split by double line breaks

  const parsedData = {
    mealPlan: [],
    groceryList: [],
    recipes: [],
  };

  // Process each section:
  sections.forEach((section) => {
    // Meal Plan Section
    if (section.startsWith('Meal Plan')) {
      const mealDays = section.split('\n- '); // Split by meal days
      mealDays.forEach((mealDay) => {
        const [day, ...meals] = mealDay.split('\n'); // Extract day and meals
        parsedData.mealPlan.push({
          name: day.trim(),
          meals: {
            breakfast: meals[0].trim(),
            lunch: meals[1].trim(),
            dinner: meals[2].trim(),
            snacks: meals.length > 3 ? meals[3].trim() : '',
          },
        });
      });
    }

    // Grocery List Section
    if (section.startsWith('Grocery List')) {
      parsedData.groceryList = section
        .split('\n')
        .slice(1) // Skip the header
        .map((item) => item.trim());
    }

    // Recipes Section
    if (section.startsWith('Recipes')) {
      parsedData.recipes = section
        .split('\n- ')
        .slice(1) // Skip the header
        .map((recipe) => {
          const [name, url] = recipe.split(': ');
          return { name: name.trim(), url: url.trim() };
        });
    }
  });

  return parsedData;
}

function GeminiOutput({ aiResponse }) {
  const parsedOutput = parseOutput({ aiResponse }); // Use destructuring

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
            <th>Snacks</th>
          </tr>
        </thead>
        <tbody>
          {parsedOutput.mealPlan.map((day, index) => (
            <tr key={index}>
              <td>{day.name}</td>
              <td>{day.meals.breakfast}</td>
              <td>{day.meals.lunch}</td>
              <td>{day.meals.dinner}</td>
              <td>{day.meals.snacks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Grocery List</h2>
      <ul>
        {parsedOutput.groceryList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Recipe Links</h2>
      <ul>
        {parsedOutput.recipes.map((recipe, index) => (
          <li key={index}>
            <a href={recipe.url} target="_blank" rel="noreferrer noopener">{recipe.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GeminiOutput;
