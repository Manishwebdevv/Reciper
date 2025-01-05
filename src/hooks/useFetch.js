import axios from "axios"
import { useState } from "react"
import { RECIPE } from "../utils/constants"

const UseFetch = () => {
    const [country, setCountry] = useState('indian')
    const [cards, setCards] = useState([])
    const [list, setList] = useState([])
     
    const listUrl = process.env.REACT_APP_LIST

    async function fetchData() {
        try {
            const response = await axios.get(RECIPE + country)
            const result = response.data?.meals
            setCards(result)
    
          } catch (error) {
              
          }
    }

    async function fetchList() {
        try {
            const countryList = await axios.get(listUrl)
            const result = countryList.data?.meals
            setList(result)
        } catch (error) {
           
        } 
    }
    return { country, setCountry, cards, setCards, list, setList, fetchData, fetchList }
  }

  
  export default UseFetch