import numeral from 'numeral'

import { order } from '~@types'

const shopList = ({ d }: { d: order }) => {
  return (
    <div className="bg-white border-t border-b">
      <div className="flex p-3 space-x-2 items-center">
        <div className="flex-shrink-0 w-24 h-24">
          <img src={d.shopItem.imgUrl} className="object-cover rounded-xl w-24 h-24" alt="" />
        </div>
        <div className="flex-grow p-2">
          <div className="font-light text-sm sm:text-md">{d.shopItem.shopName}</div>
          <div className="font-bold text-xl sm:text-4xl">{d.shopItem.name}</div>

          <div className="flex justify-between text-sm font-light mt-1">
            <div>{`${numeral(d.shopItem.price).format('0,0.00')} x ${d.quantity} ${d.shopItem.unit}`}</div>
            <div>{`${numeral(d.shopItem.price * d.quantity).format('0,0.00')} บาท`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default shopList
