import React, { useEffect, useState } from 'react'
import Recipe from './Components/recipe'
import './App.css';

function App() {

  const APP_ID = '49ea33c5';
  const APP_KEY = '28d93199c23c1feea2655d86d5db5888'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    setLoading(true);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    setLoading(false);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return (
    loading ? 
    <div class="loading-wrapper">
      <div class="loading-content">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
    :
    <div className="App">
      <div class="col-sm-6 col-sm-offset-3 mx-auto">
        <form onSubmit={getSearch} class="search-form">
          <input className="search-bar" class="form-control" placeholder="search a recipe" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button btn btn-primary" type="submit">Search</button>
        </form>
      </div>
      <div class="content-wrapper">
        <div class="container">
          <div class="row">
            {recipes.map(recipe => ( 
              <div class="col-sm-6 box-itemize">
                <div class="col-sm-12 ingredient_box">
                  <Recipe 
                    key = {recipe.recipe.label}
                    title = {recipe.recipe.label}
                    calories = {recipe.recipe.calories}
                    image = {recipe.recipe.image}
                    ingredients = {recipe.recipe.ingredients}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
