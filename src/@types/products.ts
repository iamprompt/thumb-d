type product = {
  _id: string
  name: string
  unit: string
}

type templeRequestItem = product & {
  reqAmount: number
  shopItem: {
    shopId: string
    shopName: string
  } & shopProductItem
}

type shopProductItem = product & {
  description: string
  inStock: number
  status: string
  price: number
  imgUrl: string
}

export type { product, templeRequestItem, shopProductItem }
