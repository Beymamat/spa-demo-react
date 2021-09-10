import React from "react"
import {Link} from "react-router-dom"

function MealItem(props) {
   const {idMeal,strMeal,strMealThumb} =props

   return(
    <div className="card">
    <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
    </div>
    <div className="card-content">
        <h2 className="card-title">{strMeal}</h2>
    </div>
    <div className="card-action">
       <Link to={`meal/${idMeal}`}  className="btn">Watch Reciepe</Link>
    </div>
</div>
   )
}

export {MealItem}