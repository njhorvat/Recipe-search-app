import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,source}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <a href={source} alt="" target="_blank">Source</a>
            <img src={image} alt="" />
            <div className={style.border}></div>
        </div>
    );
}

export default Recipe;