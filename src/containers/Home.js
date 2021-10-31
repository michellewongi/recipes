import React, { useState } from "react";
import axios from "axios";
import Recipe from "../components/Recipes";
import Drinks from "../components/Drinks";

const APIKey = "4cebf157b6644eae9c8599ead141d4be";

function Home() {
  const [food, setFood] = useState();
  const [foodName, setFoodName] = useState();
  const [drink, setDrink] = useState();
  const [drinkName, setDrinkName] = useState();

  const recipeURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&query=${foodName}&number=1&addRecipeInformation=true`;

  const drinksURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;

  // have the UI change based on data
  function changeColor(color) {
    document.body.style.backgroundColor = color;
  }

  function handleChange(e) {
    setFoodName(e.target.value);
  }

  function handleChangeDrink(e) {
    setDrinkName(e.target.value);
  }

  // Using two sources of data
  const getRecipe = () => {
    axios
      .get(recipeURL)
      .then(function (response) {
        setFood(response.data);
        console.log(recipeURL);
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  const getDrink = () => {
    axios
      .get(drinksURL)
      .then(function (response) {
        setDrink(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  return (
    // displaying the two sources of data
    // have the UI be interactive
    <main className="App">
      <h1 className="logo">Recipes . . .</h1>
      <section className="search-section">
        <section className="food-section">
          <h1 className="food-title">Food</h1>
          <input
            type="text"
            placeholder="Name of food (e.g. pasta)"
            onChange={handleChange}
          />
          <button
            className="foodBtn"
            onClick={() => {
              getRecipe();
              changeColor("#f0a69c");
            }}
          >
            Search
          </button>
          <Recipe recipeList={food} />
        </section>

        <section className="drinks-section">
          <h1 className="drinks-title">Drinks</h1>
          <input
            type="text"
            placeholder="Name of drink (e.g. mojito)"
            onChange={handleChangeDrink}
          />
          <button
            className="drinkBtn"
            onClick={() => {
              getDrink();
              changeColor("#ffcfa3");
            }}
          >
            Search
          </button>
          <Drinks drinkList={drink} />
        </section>
      </section>
    </main>
  );
}

export default Home;
