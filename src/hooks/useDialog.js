import axios from "axios";
import { useEffect, useState } from "react"

const useDialog = () => {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [cardId, setCardId] = useState('')
    
    const fetchData = process.env.REACT_APP_FETCH_DATA;

    async function cardData() {
        const response = await axios.get(fetchData + cardId);
        if(response){
            setData(response.data?.meals[0]);
        }
    }
    const dialogOpen = (cardId) => {
        setIsOpen(true)
        setCardId(cardId)
    }

    useEffect(() => {
        if(isOpen){
            cardData()
        } 
    }, [cardId])

    const dialogClose = () => {
        setIsOpen(false)
    }

    return { dialogOpen, dialogClose, cardId, isOpen, data }
}

export default useDialog