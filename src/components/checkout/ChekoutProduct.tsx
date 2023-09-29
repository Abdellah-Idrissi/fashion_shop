import Image from "next/image";
import Link from "next/link";
import DeleteCartProduct from "../cart/DeleteCartProduct";


type propsType = {
  product:cartItem
}

export default function ChekoutProduct({product:{details,sizes}}:propsType) {
  const isWomen = details.images[0].includes("women")
  const segment = isWomen ? `women` : `men`

  return (
    <li className="flex items-center gap-x-[15px]  border-b border-gray-100 justify-between pb-[15px]">

      <div className="flex items-center group">
        <Link href={`/${segment}/${details.id}`}  className=" bg-gray-100 block h-[100px] md:h-[120px] w-[100px] md:w-[140px] relative rounded-md overflow-hidden mr-3">
          <Image
            src={details.images[0]}
            alt=""
            fill
            priority
            sizes="300px"
            className="object-cover"
          />
        </Link>

        <Link href={`/${segment}/${details.id}`} className=" flex-1 block">
          <h3 className="text-[12px] sm:text-[15px] text-gray-900 uppercase group-hover:underline group-hover:underline-offset-2">{details.title}</h3>
          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <p className="inline">Price: </p>
              <p className="inline">{details.price}$</p>
            </div>
          </dl>
        </Link>
      </div>

      <div className="flex items-center justify-end gap-2 ">
        <div>
          <p className="sr-only"> Quantity </p>

          <p className="h-8 w-12 rounded grid place-items-center border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
            {sizes.length}
          </p>
        </div>

        <DeleteCartProduct product={details}/>
      </div>

  </li>
  )
}
