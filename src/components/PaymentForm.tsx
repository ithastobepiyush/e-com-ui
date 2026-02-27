"use client"
import { paymentFormInputs, paymentFormSchema} from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, ShoppingCartIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import {SubmitHandler, useForm} from "react-hook-form"
import Image from "next/image"

const PaymentForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<paymentFormInputs>({
    resolver: zodResolver(paymentFormSchema)
  })

  const router = useRouter()

  const handlePaymentForm :SubmitHandler<paymentFormInputs> = (data)=>{
   

  }

  return (
    <form className="flex flex-col  gap-4" onSubmit={handleSubmit(handlePaymentForm)}>

      <div className="flex flex-col gap-1">
        <label htmlFor="cardHolder" className="text-sm font-medium text-gray-600">
          Name on Card
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-no text-sm"
          type="text"
          id="cardHolder"
          placeholder="Enter the Name on Card"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cardNumber" className="text-sm font-medium text-gray-600">
          Card Number
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-no text-sm"
          type="text"
          id="cardNumber"
          placeholder="Enter your Card Number"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="expirationDate" className="text-sm font-medium text-gray-600">
          Expiration Date
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-no text-sm"
          type="text"
          id="expirationDate"
          placeholder="MM/YY"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">{errors.expirationDate.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-sm font-medium text-gray-600">
          CVV
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-no text-sm"
          type="text"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-xs text-red-500">{errors.cvv.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md"/>
        <Image src="/cards.png" alt="klarna" width={50} height={25} className="rounded-md"/>
        <Image src="/stripe.png" alt="klarna" width={50} height={25} className="rounded-md"/>
      </div>
      <button
        // onClick={() => router.push("/cart?step=2", { scroll: false })}
        type="submit"
        className="flex items-center justify-center gap-3 w-full bg-gray-900  text-white p-2 rounded-lg cursor-pointer hover:bg-green-600 transition-all duration-300"

      > Checkout <ShoppingCartIcon className="w-5 h-5" />
      </button>
    </form>
  );
}

export default PaymentForm
