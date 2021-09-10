import React from "react"
import { useParams, useHistory, useLocation, useRouteMatch } from "react-router-dom"

export default function Movies() {
    const params = useParams()
    const { id } = useParams()
    const history=useHistory()
    const location=useLocation()
    const routematch=useRouteMatch()
    console.log("params - ")
    console.log(params)
    console.log("history")
    console.log(history)
    console.log("location")
    console.log(location)
    
    console.log("route match")
    console.log(routematch)
    return (
        <div>
            <button className="btn" onClick={history.goBack}>Go Back</button>
            <button className="btn" onClick={history.goForward}>Go FOrward</button>
            <h1> Movies page id:{params.id} </h1>
            <h1> Movies page id:{id}</h1>
        </div>
    )
}