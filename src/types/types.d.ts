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
/**
 * Custom-made type for marking user data - underscore added to differentiate it from Supabase type.
 */
type _User = {
  username: string | null,
  email: string | null,
  password: string | null,
}

type CarouselItem = {
  src: Record<string, string> = {
  desktop: string,
  mobile: string
  },
  alt?: string,
  header: string,
  text: string,
  url: string
}

