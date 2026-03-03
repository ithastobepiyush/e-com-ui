import { CartStoreActionType, CartStoreStateType } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';



const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,

      // add to cart function that will handle all the new insertion of products
      addToCart: (product) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(p=>
            p.id === product.id &&
            p.selectedSize === product.selectedSize &&
            p.selectedColor === product.selectedColor
          )
          if(existingIndex !== -1){
            const updatedCart = [...state.cart]
            updatedCart[existingIndex].quantity += product.quantity || 1
            return {cart: updatedCart}
          }
          return{
            cart:[
              ...state.cart,
              {
                ...product,
              }
            ]
          }

        }),

      // removeFromCart function it removes the each item in the cart page
      removeFromCart: (product) =>
        set((state) => ({ cart: state.cart.filter((p) => !(
          p.id === product.id &&
          p.selectedSize === product.selectedSize &&
          p.selectedColor === product.selectedColor
        )),
      })),
      // clear cart returns an empty array
      clearCart: () =>
        set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: ()=> (state) =>{
        if(state){
          state.hasHydrated = true;
        }
      },
    }
  )
);
export default useCartStore;