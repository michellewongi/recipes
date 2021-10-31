import React from "react";

function Drinks({ drinkList }) {
  if (!drinkList) return <></>;
  return (
    <section className="drinkCard">
      <h1 className="drinks-name">{drinkList.drinks[0].strDrink}</h1>
      <img src={drinkList.drinks[0].strDrinkThumb} alt="Drink" />
      <p>
        <strong>Category: </strong>
        {drinkList.drinks[0].strCategory}
      </p>
      <p>
        <strong>Alcoholic: </strong>
        {drinkList.drinks[0].strAlcoholic}
      </p>
      <p>
        <strong>Instructions: </strong>
        {drinkList.drinks[0].strInstructions}
      </p>
    </section>
  );
}

export default Drinks;
