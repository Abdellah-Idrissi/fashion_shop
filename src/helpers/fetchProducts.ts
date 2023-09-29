import filterProducts from "./filterProducts"

export default async function fetchProducts(segment:segmentType , searchParams:searchParamsType) {

  const result : returnType = {
    error:false,
    products: []
  }

  try {
    const productsPromise = await fetch(`https://fadadoussama.github.io/fashionShop_api/${segment}api.json`,{cache:'force-cache'})
    const products = await productsPromise.json()
    result.products = filterProducts(products[segment],searchParams)
    return result
  }
  catch(error) {
    throw Error(`failed while fetching ${segment} products`)
  }
}







