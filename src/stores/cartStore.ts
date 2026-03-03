import { CartStoreActionType, CartStoreStateType } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';



const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
  persist(
    (set) => ({
      cart: [],
      // add to cart function that will handle all the new insertion of products
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),

      // removeFromCart function it removes the each item in the cart page
      removeFromCart: (product) =>
        set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),

      // clear cart returns an empty array
      clearCart: () =>
        set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
export default useCartStore;