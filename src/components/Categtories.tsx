"use client";
import React from 'react'
// import { useSearchParams } from 'next/navigation';

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { log } from 'console';
// import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];


const Categtories = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const selectedCategory = searchParams.get("category")

    const handleChange = (value:string | null) =>{
      const params = new URLSearchParams(searchParams)
      params.set("category", value || "all");
      router.push(`${pathname}?$${params.toString()}`, { scroll:false});
    };

    console.log(selectedCategory);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-8 bg-gray-400 p-2b rounded-lg mb-4 test-sm'>

      {categories.map((category) => (

        <div className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 ${category.slug === selectedCategory ? "bg-white" : "text-gray-600"}`} onClick={()=>handleChange(category.slug)} key={category.name}>

          {category.icon}
          {category.name}

        </div>
      ))}

    </div>
  )
}

export default Categtories