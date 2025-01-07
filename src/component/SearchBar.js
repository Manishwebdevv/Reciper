import { useEffect, useState } from "react"
import SearchIcons from "../icons/SearchIcons"

const SearchBar = ({ setCountry, list }) => {
const [ searchCountry, setSearchCountry ] = useState('')
    
 const handleSearch = (e) => {
    
    if(searchCountry){
     const filteredResult = list.filter((listItem) => listItem.strArea.toLowerCase().includes(searchCountry.toLowerCase()))
     const area = filteredResult[0]?.strArea
     
    if(area){
        setCountry(area)
     }} 
    }

    return (
            <div className='flex items-center mr-[70px] bg-slate-200 p-2 rounded-md'>
            <input type='text' value={searchCountry} onChange={(e) => setSearchCountry(e.target.value)} placeholder='Search here' 
            className='bg-inherit px-3 p-1 mr-2 font-sans text-black rounded-md focusb:order-4 focus:border-black'/>
            <button onClick={handleSearch}>
            <SearchIcons width-20 h-24/>
            </button>
           </div>
    )
}

export default SearchBar