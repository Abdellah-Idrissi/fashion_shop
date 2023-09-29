"use client"

import setQueries from "@/helpers/setQueries"
import { useRouter, useSearchParams } from "next/navigation"

export default function Tshirts({segment}:{segment:segmentType}) {
  const router = useRouter()

  const searchParams = useSearchParams()
  const priceQuery = searchParams.get('category')
  const hasTshirts = priceQuery && priceQuery === 'tshirts'

  const addQueryFn = (key:queryKeyType,value:queryValueType)=> {
    const queries = setQueries(key,value)
    router.push(`/${segment}/?${queries}`)
  }

  return (
    <div onClick={()=> addQueryFn('category','tshirts')} className={`filterBtn ${hasTshirts && 'active'}`}>
      T-shirts
    </div>
  )
}
