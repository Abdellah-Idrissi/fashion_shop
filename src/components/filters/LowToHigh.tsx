"use client"

import setQueries from "@/helpers/setQueries"
import { useRouter, useSearchParams } from "next/navigation"

export default function LowToHigh({segment}:{segment:segmentType}) {
  const router = useRouter()

  const searchParams = useSearchParams()
  const priceQuery = searchParams.get('price')
  const hasLth = priceQuery && priceQuery === 'lth'

  const addQueryFn = (key:queryKeyType,value:queryValueType)=> {

    const queries = setQueries(key,value)
    router.push(`/${segment}/?${queries}`)
  }

  return (
    <div onClick={()=> addQueryFn('price','lth')} className={`filterBtn ${hasLth && 'active'}`}>
      Low To High
    </div>
  )
}
