import { shopProductItem } from './products'

type order = {
  shopItem: {
    shopId: string
    shopName: string
  } & shopProductItem
  quantity: number
}

type orders = {
  [key: string]: order
}

export type { order, orders }
