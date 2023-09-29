import { cn } from "@/lib/utils"
import { Dispatch, SetStateAction } from "react"

export const sizes : sizesType[] = ['s','m','l','xl','xxl']

type propsType = {
  size:sizesType | "" 
  setSize: Dispatch<SetStateAction<"" | sizesType>>
}

export default function Sizes({setSize,size : sizeState}:propsType) {
  
  const handleSize = (size:sizesType | "" )=> {
    if(sizeState !== size) return setSize(size)
    else setSize('')
  }

  return (
    <div className="flex gap-1 mt-3 sm:mt-0">
      <div className="flex gap-[8px]">
        {sizes.map((size)=> (
          <div onClick={()=> handleSize(size)} className={cn(`uppercase w-[27px] text-[13px] h-[27px] border border-mainColor grid place-content-center transition duration-200 hover:bg-mainColor hover:text-white rounded-sm cursor-pointer ${sizeState === size && 'bg-mainColor text-white'}`)} key={size}>{size}
          </div>
        ))}
      </div>
    </div>
  )
}

