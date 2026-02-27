import React from 'react'
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div className='mt-16 mb-5 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg md:justify-between gap-8 md:gap-0'>
      <div className='flex flex-col gap-4'>
        <Link href="/" className='flex items-center md:items-start'>
          <Image
            src="/logo.png"
            alt="TrendingLogo"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className='hidden md:block text-md font-medium tracking-wider text-white'>Store4you.</p>
        </Link>
        <p className='text-sm text-gray-400'>Ⓒ 2026 Store4you.</p>
        <p className='text-sm text-gray-400'>All rights reserveed</p>
      </div>
      <div className='flex flex-col text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Services</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className='flex flex-col text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Products</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>
      <div className='flex flex-col text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Company</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  )
}

export default Footer