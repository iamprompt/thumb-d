import { shopProductItem, templeRequestItem } from './products'

type places = {
  _id: string
  name: string
  imgUrl: string
  description?: string
  location: {
    city: string
    province: string
  }
  pos: {
    _latitude: number
    _longitude: number
  }
}

type templeInterface = places & { requests: templeRequestItem[] }
type shopInterface = places & { products: shopProductItem[] }

export type { places, templeInterface, shopInterface }
