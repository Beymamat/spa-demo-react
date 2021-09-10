import React from "react"
import {MealItem} from '../components/MealItem';

function MealsList({meals}) {
   return(
       <div className="lest">
            {meals.map(meal=>(
                <MealItem key={meal.idMeal} {...meal}/>
            ))}
       </div>
   )
}

export {MealsList}