import React from 'react'
import './recipe.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div class="col-sm-12">
            <img src={image} alt="" class="rounded-circle" width="140" />
            <h3>{title}</h3>
            <div class="ingredients-item">
                {ingredients.map(ingredient => (
                    <span>{ingredient.text}</span>
                ))}
            </div>
            <p>Calories: {calories}</p>
        </div>
    )
}
export default Recipe