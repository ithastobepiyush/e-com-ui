"use client";
import { ProductType } from '@/types';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';


const ProductCard = ({ product }: { product: ProductType }) => {

  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0]
  })

  const handleProductType = ({
    type,
    value
  }:{
    type:"size" | "color",
    value:string
  }) =>{
    setProductTypes((prev) => ({
      ...prev,
      [type]:value,
    }))

  }

  return (
    // product card division
    <div className='shadow-lg rounded-lg overflow-hidden'>

      {/* Image */}
      <Link href={`/product/${product.id}`}>

        <div className='relative aspect-[2/3]'>
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className='obeject-cover hover:scale-105 transition-all duration-300'
          />
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
            <select
              name="size"
              id="size"
              className='ring ring-gray-400 rounded-md px-2 py-1'
              onChange={e=>handleProductType({type:"size", value:e.target.value})}
            >
              {product.sizes.map(size => (
                <option
                  key={size}
                  value={size}>{size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* COLORS */}
          <div className='flex flex-col gap-1'>
            <span className='text-gray-500'>Color</span>
            <div className='flex items-center gap-2'>
              
              {product.colors.map(color => (
                <div
                  className={`cursor-pointer border-1 ${productTypes.color === color ? "border-black" : "border-gray-200"} rounded-full p-[1.2px] `}
                  key={color}
                  onClick={()=>handleProductType({type:"color", value:color})}
                >

                  <div className='w-[14px] h-[14px] rounded-full'
                    style={{ backgroundColor: color }}
                  />

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PRICE AND ADD TO CART */}
        <div className='flex items-center justify-between'>
          <p className='font-medium'>${product.price.toFixed(2)}</p>
          <button className='flex items-center gap-2 ring ring-gray-300 shadow-lg rounded-md text-sm px-2 py-1 cursor-pointer hover:text-white hover:bg-black transition-all duration-300'>

            <ShoppingCart className='w-4 h-5' />
            Add to cart

          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard