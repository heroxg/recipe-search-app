import React, {useEffect, useState} from 'react'
import Recipe from './Components/foodrecipe/Recipe'
 

function App2() {
    const APP_ID = "49ea33c5";
    const APP_KEY = "28d93199c23c1feea2655d86d5db5888";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery]= useState('chicken');
    
    useEffect(() =>{
        getRecipes();
    },[query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
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
        <div class="main">
             <div class="col-sm-12">
                <h3>My Recipe Search App</h3>
            </div>
            <form onSubmit={getSearch}>
                <input type="text" placeholder="search a recipe" value={search} onChange={updateSearch}/>
                <button type="submit">search</button>
            </form>
            <div>
                {recipes.map(recipe => (
                    <Recipe 
                        title={recipe.recipe.label}
                        calories = {recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    )
}

export default App2