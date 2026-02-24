import React from 'react'
import Link from "next/link"
import Image from "next/image"
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
            {/* Left Section */}
            <Link href="/" className='flex items-center'>
                <Image
                    src="/logo.png"
                    alt="TrendingLogo"
                    width={36}
                    height={36}
                    className="w-6 h-6 md:w-9 md:h-9"
                />
                <p className='hidden md:block text-md font-medium tracking-wider'>TRENDLAMA.</p>
            </Link>
            {/* Right Section */}
            <div className='flex'>
                <SearchBar />
                <Link href="/" >
                    <Home />
                </Link>
                <Bell />
                <ShoppingCart />
            </div>
        </nav>
    )
}

export default Navbar