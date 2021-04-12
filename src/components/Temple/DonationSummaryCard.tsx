import numeral from 'numeral'

import { order } from '~@types'

const shopList = ({ d }: { d: order }) => {
  return (
    <div className="bg-white border-t border-b">
      <div className="flex items-center p-3 space-x-2">
        <div className="flex-shrink-0 w-24 h-24">
          <img
            src={d.shopItem.imgUrl}
            className="object-cover w-24 h-24 rounded-xl"
            alt=""
          />
        </div>
        <div className="flex-grow p-2">
          <div className="text-sm font-light sm:text-md">
            {d.shopItem.shopName}
          </div>
          <div className="text-xl font-bold sm:text-4xl">{d.shopItem.name}</div>

          <div className="flex justify-between mt-1 text-sm font-light">
            <div>{`${numeral(d.shopItem.price).format('0,0.00')} x ${
              d.quantity
            } ${d.shopItem.unit}`}</div>
            <div>{`${numeral(d.shopItem.price * d.quantity).format(
              '0,0.00'
            )} Baht`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default shopList
