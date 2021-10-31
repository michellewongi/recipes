import React from "react";

function Recipe({ recipeList }) {
  if (!recipeList) return <></>;
  return (
    <section className="recipeCard">
      <h1 className="food-name">{recipeList.meals[0].strMeal}</h1>
      <img src={recipeList.meals[0].strMealThumb} alt="Food" />
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
      <strong>Instructions:</strong>
      <p
        className="instructions"
        dangerouslySetInnerHTML={{
          __html: recipeList.meals[0].strInstructions,
        }}
      ></p>
      <a className="link" href={recipeList.meals[0].strSource}>
        <strong>Click for Recipe</strong>
      </a>
    </section>
  );
}

export default Recipe;
