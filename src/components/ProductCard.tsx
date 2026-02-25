"use client";
import { ProductType } from '@/types';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const ProductCard = ({product}:{product:ProductType}) => {
  return (
    // product card division
    <div className='shadow-lg rounded-lg overflow-hidden'>
      {/* Image */}
      <Link href={`/product/${product.id}`}>

        <div className='relative aspect-[2/3]'>
          <Image
            src={product.images[product.colors[0]]}
            alt={product.name}
            fill
            className='obeject-cover hover:scale-105 transition-all duration-300' />
        </div>
      </Link>

      {/* Product Details */}
      <div className='flex flex-col gap-4 p-4'>
        <h1 className='font-medium'>{product.name}</h1>
        <p className='text-sm text-gray-500'>{product.shortDescription}</p>

        {/* PRODUCT TYPE */}
        <div className='flex items-center gap-4 text-xs'>
          {/* SIZES */}
          <div className='flex flex-col gap-1'>
            <span className='text-gray-500'>Size</span>
            
            <select name="size" id="size" className='ring ring-gray-400 rounded-md px-2 py-1'>
              {product.sizes.map(size=>(
                <option value={size}>{size.toUpperCase()}</option>
              ))}
            </select>
          </div>

          {/* COLORS */}
          <div className=''></div>

        </div>
      </div>

    </div>
  )
}

export default ProductCard