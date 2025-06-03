type Product = {
  id: number,
  title: string,
  description: string | null,
  category: string,
  price: number,
  rating: number,
  images: string[]
}


type Categories = {
  slug: string,
  name: string,
  url: string
}

type ProductCardData = {
  id: number,
  name: string,
  price: number,
  image: string
}


type BasketDataItem = {
  id: string,
  name: string,
  price: number,
  quantity: number
}


declare module 'vueperslides'

