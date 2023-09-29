type segmentType = 'men' | 'women'

type searchParamsType = {
  category:string , price:string
}

type productType = {
  title: string
  price: number
  category: string
  id: number
  description: string
  stock: number
  rating: number
  images: string[]
  details: string[]
}

type productsType = productType[] | []

type returnType = {
  error:boolean,
  products:productsType
}

type queryKeyType = 'category' | 'price'
type queryValueType = 'lth' | 'htl' | 'sweaters' | 'tshirts'


type localProductType = {
  images: string[];
  title: string;
  price: number;
  id: number;
  segment: string;
  styles:string
}

type localProductsType = localProductType[]



type sizesType = 's' | 'm' | 'l' | 'xl' | 'xxl'

type cartItem = {
  sizes:sizesType[],
  details:productType
}

type cartType = {
  [key:string] : cartItem
}