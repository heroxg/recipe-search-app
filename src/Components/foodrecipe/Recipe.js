import React from 'react'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <p>{title}</p>
            <p>{calories}</p>
            <img src={image} alt="pics" />
            <div >
                {ingredients.map(ingredient =>(
                    <span>{ingredient.text}</span>
                ))}
            </div>
        </div>
    )
}
export default Recipe