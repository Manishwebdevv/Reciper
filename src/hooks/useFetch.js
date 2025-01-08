import axios from "axios"
import { useState } from "react"

const useFetch = () => {
    const [country, setCountry] = useState('indian')
    const [cards, setCards] = useState([])
    const [list, setList] = useState([])
    const [error, setError] = useState("")
    
    const dishes = process.env.REACT_APP_RECIPE
    const listUrl = process.env.REACT_APP_LIST

    async function fetchData() {
        try {
            const response = await axios.get(dishes + country)
            const result = response.data?.meals
            setCards(result)
    
          } catch (error) {
            setError("Oops! Something went wrong. Please try again later.")
          }
    }

    async function fetchList() {
        try {
            const countryList = await axios.get(listUrl)
            const result = countryList.data?.meals
            setList(result)
        } catch (error) {
            setError("Oops! Something went wrong. Please try again later.")
        } 
    }
    return { country, setCountry, cards, setCards, list, setList, fetchData, fetchList }
  }

  
  export default useFetch