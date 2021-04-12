import numeral from 'numeral'
import { Dispatch, SetStateAction } from 'react'

import { shopProductItem, templeRequestItem } from '~@types'

import { MaterialIcons } from '@/components/Icons'

const shopList = ({
  d,
  onUpdate,
  value,
  onInput,
}: {
  d: templeRequestItem
  onUpdate: (
    p: templeRequestItem,
    currentCount: number,
    v: number
  ) => void | undefined
  value: {
    [key: string]: {
      shopItem: {
        shopId: string
        shopName: string
      } & shopProductItem
      quantity: number
    }
  }
  onInput: Dispatch<
    SetStateAction<{
      [key: string]: {
        shopItem: {
          shopId: string
          shopName: string
        } & shopProductItem
        quantity: number
      }
    }>
  >
}) => {
  return (
    <div className="bg-white border-t border-b">
      <div className="flex p-3 space-x-2">
        <div className="flex-shrink-0 w-32 h-32">
          <img
            src={d.shopItem.imgUrl}
            className="object-cover w-32 h-32 rounded-xl"
            alt=""
          />
        </div>
        <div className="flex-grow p-2">
          <div className="text-sm font-light sm:text-md">
            {d.shopItem.shopName}
          </div>
          <div className="text-xl font-bold sm:text-4xl">{d.shopItem.name}</div>
          <div className="mt-3 text-2xl font-normal">
            {numeral(d.shopItem.price).format('0,0.00')}
            {' Baht / '}
            {d.shopItem.unit}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 p-3">
        <MaterialIcons
          className={`p-3 ${
            value[d._id].quantity === 0 ? '!text-gray-200' : 'cursor-pointer'
          }`}
          onClick={() => onUpdate(d, value[d._id].quantity, -1)}
          icon="remove"
        />
        <input
          type="tel"
          value={value[d._id].quantity}
          onChange={({ target }) => {
            onInput({
              ...value,
              [d._id]: {
                ...value[d._id],
                quantity: parseInt(target.value) || 0,
              },
            })
          }}
          className="p-3 m-2 text-center border rounded-xl"
          size={3}
        />
        <MaterialIcons
          className={`p-3 ${
            value[d._id].quantity === d.shopItem.inStock
              ? '!text-gray-200'
              : 'cursor-pointer'
          }`}
          onClick={() => onUpdate(d, value[d._id].quantity, 1)}
          icon="add"
        />
      </div>
    </div>
  )
}

export default shopList
