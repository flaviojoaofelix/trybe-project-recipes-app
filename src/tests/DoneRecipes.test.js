import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "../App";
import renderWithRouter from "./helpers/renderWithRouter";
// import mockFetch, {
//   COCKTAILDB_REQUEST_URL,
//   MEALDB_REQUEST_URL,
// } from "./mocks/fetch";
// import { cocktaildbCategories, mealdbCategories } from "./mocks/categoriesResponse";
// import beefMeals from "../../cypress/mocks/beefMeals";
import { act } from "react-dom/test-utils";
// import mealdbResponse from "./mocks/mealdbResponse";
// import cocktaildbResponse from "./mocks/cocktaildbResponse";

describe("Testa a tela de receitas", () => {  
  const recipes = [
    {
      id: "52771",
      type: "food",
      nationality: "Italian",
      category: "Vegetarian",
      alcoholicOrNot: "",
      name: "Spicy Arrabiata Penne",
      image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      index: 1,
      doneDate: new Date(),
      tags: ['Pasta', 'Curry'],
    },
    {
      id: "17222",
      type: "drink",
      nationality: "",
      category: "Cocktail",
      alcoholicOrNot: "Alcoholic",
      name: "A1",
      image: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
      doneDate: new Date(),
      tags: [],
    },
  ];

  beforeEach(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(recipes))
  })

  it("Deve mostrar as informações básicas de cada receita favoritada", async () => {
    const { history } = renderWithRouter(<App />);
    history.push("/done-recipes");
    
    recipes.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  });

  it("Os filtros devem funcionar de acordo", async () => {
    const { history } = renderWithRouter(<App />);
    history.push("/done-recipes");
    
    const filterAll = screen.getByTestId('filter-by-all-btn')
    const filterFood = screen.getByTestId('filter-by-food-btn')
    const filterDrink = screen.getByTestId('filter-by-drink-btn')

    act(() => { userEvent.click(filterFood) })
    
    expect(screen.queryByText('A1')).not.toBeInTheDocument()

    act(() => { userEvent.click(filterDrink) })

    expect(screen.queryByText(recipes[0].name)).not.toBeInTheDocument()

    act(() => { userEvent.click(filterAll) })

    recipes.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  });
});