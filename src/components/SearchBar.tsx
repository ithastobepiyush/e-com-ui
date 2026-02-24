import React from 'react'
import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className='hidden sm:flex gap-2 rounded-md ring-1 ring-gray-300 px-2 py-1 shadow-md'>
        <Search className='w-4 h-4 text-gray-500' />
        <input id="search" type="text" placeholder='Search Products' className='text-sm outline-0'/>
    </div>
  )
}

export default SearchBar