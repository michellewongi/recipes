import React from "react";

function Recipe({ recipeList }) {
  /**
   * Function To display the list of ingredients
   * @param a The data for the specified food
   * @returns A list of ingredients associated with the specified food
   */
  function displayIngredients({ recipeList }) {
    let ingredient = [];
    for (let i = 1; i < 16; i++) {
      if (recipeList.meals[0][`strIngredient${i}`]) {
        ingredient +=
          "<li>" + recipeList.meals[0][`strIngredient${i}`] + "</li>";
      }
    }
    return ingredient;
  }
  if (!recipeList) return <></>;
  return (
    <section className="recipeCard">
      <img src={recipeList.meals[0].strMealThumb} alt="Food" />
      <h1 className="food-name">{recipeList.meals[0].strMeal}</h1>
      <p>
        <strong>Category: </strong>
        {recipeList.meals[0].strCategory
          ? recipeList.meals[0].strCategory
          : "Unknown"}
      </p>
      <p>
        <strong>Cuisine: </strong>
        {recipeList.meals[0].strArea ? recipeList.meals[0].strArea : "Unknown"}
      </p>
      <strong>Ingredients: </strong>
      <ol
        dangerouslySetInnerHTML={{
          __html: displayIngredients({ recipeList }),
        }}
      ></ol>
      <strong>Instructions:</strong>
      <p
        className="instructions"
        dangerouslySetInnerHTML={{
          __html: recipeList.meals[0].strInstructions,
        }}
      ></p>
      <a className="link" href={recipeList.meals[0].strYoutube}>
        <strong>Watch the Tutorial</strong>
      </a>
    </section>
  );
}

export default Recipe;
