import firebase from 'firebase/app'

import { templeInterface } from './places'
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

type statusAction = {
  transactedAt: firestoreTimestamp
  actionId: string
}

type firestoreTimestamp = {
  _seconds: number
  _nanoseconds: number
}

type product = {
  quantity: number
} & shopProductItem

type orderTrack = {
  _id: string
  temple: templeInterface
  status: statusAction[]
  isSuccess: boolean
  createdAt: firestoreTimestamp
  modifiedAt: firestoreTimestamp
  products: product[]
}

export type { order, orders, orderTrack }
