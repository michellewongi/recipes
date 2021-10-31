import React from "react";

function Recipe({ recipeList }) {
  if (!recipeList) return <></>;
  return (
    <section className="recipeCard">
      <h1 className="food-name">{recipeList.results[0].title}</h1>
      <img src={recipeList.results[0].image} alt="Food" />
      <p>
        <strong>Serving:</strong> {recipeList.results[0].servings}
      </p>
      <p>
        <strong>Preparation Time:</strong>{" "}
        {recipeList.results[0].readyInMinutes} minutes
      </p>
      <p
        dangerouslySetInnerHTML={{
          __html: recipeList.results[0].summary.replace(/<a .*?>/g, ""),
        }}
      ></p>
      <a href={recipeList.results[0].sourceUrl}>
        Link to the Recipe Instructions
      </a>
    </section>
  );
}

export default Recipe;
