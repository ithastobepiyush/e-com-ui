import { shippingFormInputs, shippingFormSchema } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import {SubmitHandler, useForm} from "react-hook-form"

const ShippingForm = ({
  setShippingForm}:{setShippingForm:(data:shippingFormInputs) => void;
}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<shippingFormInputs>({
    resolver: zodResolver(shippingFormSchema)
  })

  const router = useRouter()

  const handleShippingForm:SubmitHandler<shippingFormInputs> = (data)=>{
    setShippingForm(data)
    router.push("/cart?step=3", {scroll: false})

  }

  return (
    <form className="flex flex-col  gap-4" onSubmit={handleSubmit(handleShippingForm)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-no text-sm"
          type="text"
          id="name"
          placeholder="Enter your Full Name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-600">
          E-mail
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-no text-sm"
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-600">
          Phone Number
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-no text-sm"
          type="text"
          id="phone"
          placeholder="Enter your number"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-sm font-medium text-gray-600">
          Address
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-no text-sm"
          type="text"
          id="address"
          placeholder="Enter your address"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-sm font-medium text-gray-600">
          City
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-no text-sm"
          type="text"
          id="city"
          placeholder="Enter your city"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
      </div>
      <button
        // onClick={() => router.push("/cart?step=2", { scroll: false })}
        type="submit"
        className="flex items-center justify-center gap-3 w-full bg-gray-900  text-white p-2 rounded-lg cursor-pointer hover:bg-green-600 transition-all duration-300"

      > Continue<ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
}

export default ShippingForm
