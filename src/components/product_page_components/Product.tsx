"use client"
import { BsCheck2Circle, BsStar } from "react-icons/bs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductImages from "./ProductImages";
import Sizes from "./Sizes";
import ProductQuantityHandler from "./ProductQuantityHandler";
import AddToCart from "./AddToCart";
import { ReactNode, useState } from "react";

type propsType = {
  product:productType,
  segment:segmentType,
  children:ReactNode
}

export default function Product({product , segment , children }:propsType) {

  const {price,rating,stock,images,description,details} = product

  const [size,setSize] = useState<sizesType | ''>('')
  const [quantity,setQuantity] = useState(1)


  return (
    <div className="mt-[65px] mb-[40px]">
      
      <div className="flex flex-col sm:flex-row gap-y-[20px] gap-x-[30px]  justify-center">

        <ProductImages images={images} />
        <div className="flex flex-col gap-y-3 sm:gap-y-5 sm:w-[350px] md:w-[450px]">

          {/* TITLE */}
          {children}

          {/* PRICE & RATING */}
          <div className="flex justify-between items-end gap-[10px] text-[15px]">
            <span className="text-mainColor/80 font-light text-[20px] leading-none">${price}</span>
            <span className="flex leading-none select-none items-center text-[15px] font-light gap-[2px] text-mainColor/90"><BsStar className={'w-[11px]'}/>{rating}</span>
          </div>

          {/* SIZES */}
          <Sizes setSize={setSize} size={size}/>

          {/* STOCK */}
          <div className="text-[15px] my-[7px] sm:my-0 bg-gray-100 w-fit px-2 py-1 rounded-sm flex gap-1 items-center text-mainColor/90 font-light">
            {stock} in stock <BsCheck2Circle className={'w-[12px] -mb-[2px] text-green-400'}/>
          </div>

          {/* DESCRIPTION & DETAILS */}
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="account">Description</TabsTrigger>
              <TabsTrigger value="password">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="account">{description}</TabsContent>
            <TabsContent value="password">
              {details.map(detail=> (
                <div key={detail}>{detail}</div>
              ))}
            </TabsContent>
          </Tabs>

          {/* QUANTITY & ADDTOCART */}
          <div className="flex gap-3 mt-3 sm:mt-0">

            <ProductQuantityHandler quantity={quantity} setQuantity={setQuantity} maxQuantity={stock}/>

            <AddToCart segment={segment} product={product} size={size} quantity={quantity} />

          </div>

        </div>

      </div>

    </div>
  )
}
