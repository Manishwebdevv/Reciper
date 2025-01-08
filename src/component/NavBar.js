import React from 'react'
import SearchBar from './SearchBar'

const NavBar = ({ country, setCountry, fetchData, list }) => {
  return (
    <div className='flex items-center justify-center sm:justify-between h-[12vh] w-full'>
        <div className='sm:ml-16 hidden sm:block'>
            <h1 className='text-2xl items-center font-bold sm:font-bold sm:text-3xl text-[#FC8112]'>R E C I P E R</h1>
        </div>
        <SearchBar country={country} setCountry={setCountry} fetchData={fetchData} list={list}/>
    </div>
  )
}

export default NavBar