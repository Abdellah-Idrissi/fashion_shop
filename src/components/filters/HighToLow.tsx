"use client"

import setQueries from "@/helpers/setQueries"
import { useRouter, useSearchParams } from "next/navigation"

export default function HighToLow({segment}:{segment:segmentType}) {
  const router = useRouter()

  const searchParams = useSearchParams()
  const priceQuery = searchParams.get('price')
  const hasHtl = priceQuery && priceQuery === 'htl'

  const addQueryFn = (key:queryKeyType,value:queryValueType)=> {
    const queries = setQueries(key,value)
    router.push(`/${segment}/?${queries}`)
    
  }

  return (
    <div onClick={()=> addQueryFn('price','htl')} className={`filterBtn ${hasHtl && 'active'}`}>
      High To Low
    </div>
  )
}
