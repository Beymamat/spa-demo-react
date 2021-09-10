import React, {useState,useEffect} from "react"
import { useParams, useHistory, useLocation, useRouteMatch } from "react-router-dom"
import { getFilterCategory } from "../api"
import { Loader } from "../components/Loader"
import { MealsList } from "../components/MealsList"

export default function Category() {
   const [meals, setMeals]=useState([])

    const { name } = useParams()
    const history=useHistory()
    const routematch=useRouteMatch()
    
    console.log("route match")
    console.log(routematch)

    useEffect(()=>{
      getFilterCategory(name).then(data=>setMeals(data.meals))
    },[name])

    return (
        <div>
            <button className="btn" onClick={history.goBack}>Go Back</button>
            <h3> Movies page id:{name} </h3>
            {!meals.length ? <Loader/> : <MealsList meals={meals}/>}
        </div>
    )
}