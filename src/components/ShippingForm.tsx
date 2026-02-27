import { shippingFormInputs, shippingFormSchema } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

const ShippingForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<shippingFormInputs>({
    resolver: zodResolver(shippingFormSchema)
  })

  return (
    <div>Shipping Form</div>
  )
}

export default ShippingForm
