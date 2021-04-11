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
            className="object-cover rounded-xl w-32 h-32"
            alt=""
          />
        </div>
        <div className="flex-grow p-2">
          <div className="font-light text-sm sm:text-md">
            {d.shopItem.shopName}
          </div>
          <div className="font-bold text-xl sm:text-4xl">{d.shopItem.name}</div>
          <div className="text-2xl font-normal mt-3">
            {numeral(d.shopItem.price).format('0,0.00')}
            {' บาท / '}
            {d.shopItem.unit}
          </div>
        </div>
      </div>
      <div className="flex flex-1 p-3 items-center justify-center">
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
          className="p-3 m-2 border rounded-xl text-center"
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
