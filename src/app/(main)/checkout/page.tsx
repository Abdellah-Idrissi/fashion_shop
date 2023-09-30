"use client"

import ChekoutProduct from "@/components/checkout/ChekoutProduct"
import { calculateTotalPrice } from "@/helpers/CalculateTotalPrice"
import { useAppSelector } from "@/rtk/hooks"
import Link from "next/link"
import { useMemo } from "react"
import { TbShoppingCartX } from "react-icons/tb"
import { toast } from "sonner"


export default function Checkout() {
  const cart = useAppSelector(state=> state.cart)
  const total = useMemo(() => calculateTotalPrice(cart), [cart])
  const cartArr = Object.values(cart)


  return (
    <section className="flex-1">
      <div className="mx-auto h-full max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col max-w-4xl mx-auto">
          <header className="text-center">
            <h1 className="text-xl sm:text-3xl uppercase">Your Cart</h1>
          </header>

          <div className="mt-8 flex flex-col  ">

              {
                cartArr.length === 0 ? 
                <div className=" text-center mt-[50px] bg-mainColor text-white p-5 rounded-md w-full md:w-[420px] mx-auto flex flex-col gap-y-3">
                  <TbShoppingCartX className={'text-[100px] font-light mx-auto'}/>
                  <p className="text-[20px]">Cart is currently empty</p>
                  <p className="font-light text-[15px]">Before procceding to checkout you must add some products in your cart , go ahead and start exploring our products</p>

                  <div className="flex gap-3 mt-[20px]">
                    <Link href={'/men'} className="grayBtn grid place-items-center hover:bg-gray-200 flex-1">Continue To Men</Link>
                    <Link href={'/women'} className="grayBtn grid place-items-center hover:bg-gray-200 flex-1">Continue To Women</Link>
                  </div>
                </div> : 
                <>
                  <ul className="space-y-4 flex-1  overflow-y-auto">
                    {(cartArr.map((product,i)=> (<ChekoutProduct key={i} product={product}/>)))}
                  </ul>

                  <div className="mt-5">
                    <div 
                      className="blackBtn cursor-pointer font-light" 
                      onClick={()=> toast.message('Payment is disabled', {
                        description: `This project is built for showcase purposes only , that's why the payment is disabled`,
                      })
                    }
                      >
                      Procced to pay {total}$
                    </div>
                  </div>
                </>
              }

          </div>

        </div>
      </div>
    </section>
  )
}
