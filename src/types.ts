import { z } from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
};
export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
};
export type CartItemsType = CartItemType[];


export const shippingFormSchema = z.object({
    name:z.string().min(1, "Name is required!"),
    email:z.string().min(1, "E-mail is required!"),
    phone:z
        .string()
        .min(10, "Phone number must be 10 digits!")
        .max(10, "Phone number must be 10 digits!")
        .regex(/^\d+$/,"Phone number must contains only numbers!"),
    address:z.string().min(1, "Address is required!"),
    city:z.string().min(1,"City is requied!"),
})
export type shippingFormInputs = z.infer<typeof shippingFormSchema>