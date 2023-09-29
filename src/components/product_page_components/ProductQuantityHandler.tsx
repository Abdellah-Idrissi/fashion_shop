import { Dispatch, SetStateAction } from "react"
import { toast } from "sonner"

type propsType = {
  quantity:number
  setQuantity:Dispatch<SetStateAction<number>>
  maxQuantity:number
}


export default function ProductQuantityHandler({quantity,setQuantity,maxQuantity}:propsType) {
  
  const addHandler = ()=> {
    if(quantity + 1 <= maxQuantity) {
      setQuantity(quantity + 1)
    }

    else toast.error(`Only ${maxQuantity} of this product left`)
  }

  const minusHandler = ()=> {
    setQuantity(quantity - 1)
  }

  return (
    <div className="flex items-center bg-gray-100 rounded-sm">
      <button onClick={minusHandler} disabled={quantity === 1} className={`w-10 h-10 leading-10 text-mainColor transition hover:opacity-70 ${quantity === 1 && 'cursor-not-allowed'}`}>
        &minus;
      </button>
      
      <p className="px-3">{quantity}</p>

      <button onClick={addHandler} disabled={quantity === maxQuantity} className={`w-10 h-10 leading-10 text-mainColor transition hover:opacity-70 ${quantity === maxQuantity && 'cursor-not-allowed'}`}>
        +
      </button>
  </div>
  )
}
