


export default function filterProducts(products:productsType,searchParams:searchParamsType) {
  const category = searchParams.category
  const price = searchParams.price

  let productsFiltered : productsType = []

  if(!category && !price) {
    productsFiltered = products
  }
  else if(category === 'sweaters' && !price) {
    const sweaterProducts = products.filter(product => product.category === 'sweater')
    productsFiltered = sweaterProducts
  }
  else if(category === 'tshirts' && !price) {
    const sweaterProducts = products.filter(product => product.category === 'tshirt')
    productsFiltered = sweaterProducts
  }
  else if(price === 'htl' && !category) {
    const sortedProductsHighToLow = products.slice().sort((a, b) => b.price - a.price)
    productsFiltered = sortedProductsHighToLow
  }
  else if(price === 'lth' && !category) {
    const sortedProductsLowToHigh = products.slice().sort((a, b) => a.price - b.price)
    productsFiltered = sortedProductsLowToHigh
  }
  else if(category === 'sweaters' && price === 'htl') {
    const sweaterProductsHighToLow = products.filter(product => product.category === 'sweater').sort((a, b) => b.price - a.price)
    productsFiltered = sweaterProductsHighToLow
  }
  else if(category === 'sweaters' && price === 'lth') {
    const sweaterProductsLowToHigh = products.filter(product => product.category === 'sweater').sort((a, b) => a.price - b.price)
    productsFiltered = sweaterProductsLowToHigh
  }
  else if(category === 'tshirts' && price === 'htl') {
    const tshirtProductsHighToLow = products.filter(product => product.category === 'tshirt').sort((a, b) => b.price - a.price)
    productsFiltered = tshirtProductsHighToLow
  }
  else if(category === 'tshirts' && price === 'lth') {
    const tshirtProductsLowToHigh = products.filter(product => product.category === 'tshirt').sort((a, b) => a.price - b.price)
    productsFiltered = tshirtProductsLowToHigh
  }

  return productsFiltered

}



// empty
// category = sweaters && price == undefined
// category = tshirts && price == undefined
// price = htl && category == undefined
// price == lth && category == undefined


// category = sweaters && price == lth
// category = sweaters && price == htl
// category = tshirts && price == lth
// category = tshirts && price == htl