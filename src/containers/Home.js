import React, { useState } from "react";
import axios from "axios";
import Recipe from "../components/Recipes";
import Drinks from "../components/Drinks";

function Home() {
  const [food, setFood] = useState();
  const [foodName, setFoodName] = useState();
  const [drink, setDrink] = useState();
  const [drinkName, setDrinkName] = useState();

  const recipeURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;

  const drinksURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;

  /*
   * Function to change color of page background
   * @param The specified color
   * @returns The body changed to the specifed color
   */
  function changeColor(color) {
    document.body.style.backgroundColor = color;
  }

  /*
   * Function to update state
   * @param The value inputted
   * @returns State updated
   */
  function handleChange(e) {
    setFoodName(e.target.value);
  }

  function handleChangeDrink(e) {
    setDrinkName(e.target.value);
  }

  /*
   * Function to retrieve food recipe
   * @returns food recipe data from API
   */
  const getRecipe = () => {
    axios
      .get(recipeURL)
      .then(function (response) {
        setFood(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  /*
   * Function to retrieve drinks recipe
   * @returns drinks recipe data from API
   */
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
    // displaying both data in the UI
    <main className="App">
      <h1 className="logo">Recipes . . .</h1>
      <hr />
      <section className="search-section">
        <section className="food-section">
          <h1 className="food-title">Food</h1>
          <div className="fields">
            <input
              type="text"
              placeholder="Name of food (e.g. pasta)"
              onChange={handleChange}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  getRecipe();
                  changeColor("#f0a69c");
                }
              }}
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
          </div>
          <Recipe recipeList={food} />
        </section>

        <section className="drinks-section">
          <h1 className="drinks-title">Drink</h1>
          <div className="fields">
            <input
              type="text"
              placeholder="Name of drink (e.g. mojito)"
              onChange={handleChangeDrink}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  getDrink();
                  changeColor("#ffcfa3");
                }
              }}
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
          </div>
          <Drinks drinkList={drink} />
        </section>
      </section>
    </main>
  );
}

export default Home;
