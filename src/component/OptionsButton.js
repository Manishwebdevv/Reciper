import React from 'react'

const OptionsButton = () => {
  return (
    <div className='flex h-20 w-full bg-[#ebedee93]'>
        <div className='flex items-center ml-40 gap-5'>
            <button className='bg-white text-black p-2 rounded-3xl shadow-3xl'>Filter</button>
            <button className='bg-white text-black p-2 rounded-3xl shadow-3xl'>Sort</button>
            <button className='bg-white text-black p-2 rounded-3xl shadow-3xl'>Pure veg</button>
            <button className='bg-white text-black p-2 rounded-3xl shadow-3xl'>Non veg</button>
        </div>
    </div>
  )
}

export default OptionsButton