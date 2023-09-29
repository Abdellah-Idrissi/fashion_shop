import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type propsType = {
  details:productType, 
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function CartProductLink({details:{images,id,title,price},setIsOpen} : propsType) {
  const isWomen = images[0].includes("women")
  const segment = isWomen ? `women` : `men`


  return (
    <div onClick={()=> setIsOpen(false)} className="flex items-center group">
      <Link href={`/${segment}/${id}`}  className="h-[90px] bg-gray-100 block w-[90px] relative rounded overflow-hidden mr-3">
        <Image
          src={images[0]}
          alt=""
          fill
          sizes="200px"
          priority
          className="object-cover"
        />
      </Link>

      <Link href={`/${segment}/${id}`} className=" flex-1 block">
        <h3 className="text-[12px] text-gray-900 uppercase group-hover:underline group-hover:underline-offset-2">{title}</h3>

        <dl className="mt-0.5 space-y-px text-[11px] text-gray-600">
          <div>
            <dt className="inline">Price:</dt>
            <dd className="inline"> {price}$</dd>
          </div>
        </dl>
      </Link>
    </div>
  )
}
