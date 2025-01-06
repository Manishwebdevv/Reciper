import React from 'react'
import SearchBar from './SearchBar'

const NavBar = ({ country, setCountry, fetchData, list }) => {
  return (
    <div className='flex items-center justify-between h-[12vh] w-full'>
        <div className='ml-16'>
            <h1 className='font-bold text-3xl text-[#FC8112]'>R E C I P E R</h1>
        </div>
        <SearchBar country={country} setCountry={setCountry} fetchData={fetchData} list={list}/>
    </div>
  )
}

export default NavBar