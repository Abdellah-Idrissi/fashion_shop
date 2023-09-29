"use client"
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type propsType = {
  localProduct: localProductType,
  children:React.ReactNode,
  setIsOpen?:Dispatch<SetStateAction<boolean>>
}

export default  function NavMenuProduct({localProduct:{price,segment,title,id} , children , setIsOpen }:propsType) {

  return (
    <div  onClick={()=> setIsOpen && setIsOpen(false)}>
      <Link href={`/${segment}/${id}`} className={`group block overflow-hidden `}>
        <div className="relative h-[350px] sm:h-[450px]">
          {children}
        </div>

        <div className="relative bg-white pt-3">
          <h3 className="text-[13px] uppercase text-mainColor/90 group-hover:underline group-hover:underline-offset-4">
            {title}
          </h3>

          <div className="mt-1.5 text-[15px] text-gray-900">
            <p className="tracking-wide">${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}