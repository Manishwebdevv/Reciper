import React from 'react'
import SearchIcons from '../icons/SearchIcons'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between h-[12vh] w-full'>
        <div className='ml-16'>
            <h1 className='font-bold text-3xl text-[#FC8112]'>R E C I P E R</h1>
        </div>
        <div className='flex items-center mr-24 bg-slate-300 p-2 rounded-md'>
            <input type='text' placeholder='Search Restro And Food here' className='bg-inherit p-1 mr-2 text-black rounded-md focusb:order-4 focus:border-black'/>
            <button>
            <SearchIcons width-20 h-24/>
            </button>
        </div>
    </div>
  )
}

export default NavBar