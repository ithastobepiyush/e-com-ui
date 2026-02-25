import ProductList from '@/components/ProductList'
import React from 'react'

const ProductPage = async ({
  searchParams,
}:{
  searchParams: Promise<{category:string}>;
}) => {
  const category = (await searchParams).category;
    return (
        <div className=''>
            <ProductList category= {category} />
        </div>
    )
}

export default ProductPage