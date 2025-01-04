
import axios from "axios"
import { useEffect, useState } from "react"
import { RECIPE } from "../utils/constants"
import { Link } from "react-router-dom"

const Cards = () => {
  const [country, setCountry] = useState('British')
  const [cards, setCards] = useState([])
  
  const fetchData = async () => {
      try {
        const response = await axios.get(RECIPE + country)
        const result = response.data?.meals
        setCards(result)
      } catch (error) {
        
      }
  }

useEffect(() => {
    fetchData()
}, [country])

  return (
    <div className="bg-[#ebedee93]">
    <div className="flex flex-wrap p-4 justify-center gap-8 text-nowrap overflow-hidden">
        {cards?.map((card) => {
          return ( 
            <div key={card.idMeal}>
               {/* <Link to={`/card/${card.idMeal}`}> */}
                <div className="h-56 w-72 p-2 shadow-md rounded-md bg-white">
                   <img src={card.strMealThumb} alt={card.strMeal} className="h-44 w-72 rounded-md" />
                   <h1 className="font-bold p-1 text-gray-700 text-xl overflow-hidden">{card.strMeal}</h1>
                </div>
                {/* </Link> */}
            </div>
          )
        })}
    </div>
    </div>
  )
}

export default Cards