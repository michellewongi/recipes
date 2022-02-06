import React from "react";

function Drinks({ drinkList }) {
  function displayIngredients({ drinkList }) {
    let ingredient = [];
    for (let i = 1; i < 16; i++) {
      if (drinkList.drinks[0][`strIngredient${i}`]) {
        ingredient +=
          "<li>" + drinkList.drinks[0][`strIngredient${i}`] + "</li>";
      }
    }
    return ingredient;
  }
  if (!drinkList) return <></>;
  return (
    <section className="drinkCard">
      <img src={drinkList.drinks[0].strDrinkThumb} alt="Drink" />
      <h1 className="drinks-name">{drinkList.drinks[0].strDrink}</h1>

      <p>
        <strong>Category: </strong>
        {drinkList.drinks[0].strCategory}
      </p>
      <p>
        <strong>Alcoholic: </strong>
        {drinkList.drinks[0].strAlcoholic}
      </p>
      <p>
        <strong>Glass: </strong>
        {drinkList.drinks[0].strGlass}
      </p>
      <strong>Ingredients: </strong>
      <ol
        dangerouslySetInnerHTML={{
          __html: displayIngredients({ drinkList }),
        }}
      ></ol>
      <p>
        <strong>Instructions: </strong>
        {drinkList.drinks[0].strInstructions}
      </p>
    </section>
  );
}

export default Drinks;
