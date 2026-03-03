"use client";
import PaymentForm from '@/components/PaymentForm';
import ShippingForm from '@/components/ShippingForm';
import { ArrowRight, Trash2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image';
import { shippingFormInputs } from '@/types';

const steps = [
  {
    id: 1,
    title: "Shopping Cart"
  },
  {
    id: 2,
    title: "Shipping Address"
  },
  {
    id: 3,
    title: "Payment Method"
  },
]

const cartItems = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "black",
  },
]

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<shippingFormInputs | null>(null);
  // const [shippingForm, setShippingForm] = useState<shippingFormInputs | null>(null);
  const activeStep = parseInt(searchParams.get("step") || "1")
  return (
    <div className='flex flex-col gap-8 items-center justify-center mt-12'>
      {/* Title */}
      <h1 className='text-2xl font-medium'>Your Shopping Cart</h1>
      {/* STEPS */}
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-8'>

        {steps.map((step) => (

          <div
            className={`flex items-center gap-2 border-b-2 pb-4
            ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`}
            key={step.id}>

            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center 
              ${step.id === activeStep ? "bg-gray-800" : "bg-gray-300"}`}>
              {step.id}
            </div>
            <p className={`text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-500"}`}>
              {step.title}
            </p>

          </div>
        ))}
      </div>


      {/* STEPS & DETAILS */}
      <div className='w-full flex flex-col lg:flex-row gap-16'>

        {/* STEPS */}
        <div className='w-full lg:w-7/12 shadow-lg border-gray-100 border-1 p-8 rounded-lg flex flex-col gap-8'>
          {activeStep === 1 ? (

            cartItems.map(item => (
              //SINGLE CART ITEM
              <div className='flex items-center justify-between' key={item.id}>
                {/* IMAGE AND DETAILS */}
                <div className='flex gap-8'>
                  {/* IMAGE */}
                  <div className='relative w-32 h-32 bg-ray-50 rounded-lg overflow-hidden'>
                    <Image
                      src={(item.images as any)[item.selectedColor]}
                      alt={item.name}
                      fill
                      className='object-contain'
                    />
                  </div>
                  {/* IMAGE DETAILS */}
                  <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm font-medium'>{item.name}</p>
                      <p className='text-xs text-gray-500'>Quantity:{" "}{item.quantity}</p>
                      <p className='text-xs text-gray-500'>Size:{" "}{item.selectedSize.toUpperCase()}</p>
                      <p className='text-xs text-gray-500'>Color:{" "}{item.selectedColor}</p>
                    </div>
                    <p className='font-medium'>${item.price.toFixed(2)}</p>
                  </div>
                </div>
                {/* DELETE BUTTON */}
                <button className='flex items-center justify-center w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-500 cursor-pointer'>
                  <Trash2 className='w-5 h-5' />
                </button>
              </div>
            ))
          ) :
            activeStep === 2 ? (
              <ShippingForm setShippingForm={setShippingForm} />
            ) : activeStep === 3 && shippingForm ? (
              <PaymentForm />)
              : (
                <p className='text-sm text-gray-500'>Please fill in the Shipping Form to Continue.</p>)
          }
        </div>



        {/* CART DETAILS TOTAL AMOUNT */}
        <div className='w-full h-max lg:w-5/12 shadow-lg border-gray-100 border-1 p-8 rounded-lg flex flex-col gap-8'>
          <h2 className='font-semibold'>Cart Details</h2>
          <div className='flex flex-col gap-4'>

            {/* Subtotal Section */}
            <div className='text-sm flex justify-between'>
              <p className='text-gray-800'>Subtotal</p>
              <p className='font-medium'>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0).toFixed(2)}
              </p>
            </div>

            {/* Discount Section */}
            <div className='text-sm flex justify-between'>
              <p className='text-gray-800'>Discount(10%)</p>
              <p className='font-medium'>
                $
              </p>
            </div>

            {/* Shipping Fee Section */}
            <div className='text-sm flex justify-between'>
              <p className='text-gray-800'>Shipping Fee</p>
              <p className='font-medium'>
                $
              </p>
            </div>

            <hr className='border-gray-350' />
            {/* Total Section */}
            <div className='text-lg font-medium flex justify-between'>
              <p className='text-gray-950 font-bold'>Total</p>
              <p className='font-medium'>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0).toFixed(2)}
              </p>
            </div>

          </div>


          {activeStep === 1 &&
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className='flex items-center justify-center gap-3 w-full bg-gray-700 text-white p-2 rounded-lg cursor-pointer hover:bg-gray-900 transition-all duration-300'>
              Continue
              <ArrowRight className='w-3 h-3' />
            </button>
          }

        </div>
      </div>
    </div>
  )
}

export default CartPage