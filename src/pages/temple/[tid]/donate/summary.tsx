import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import numeral from 'numeral'

import Layout from '@/layouts'

import { MaterialIcons } from '@/components/Icons'
import DonationSummaryCard from '@/components/Temple/DonationSummaryCard'
import BackButton from '@/components/Navigation/BackButton'

import { orders, templeInterface } from '~@types'
import axios from 'axios'
import { getApiURL } from '@/utils'
import { useAuth } from '@/utils/auth'

const DonatePage = () => {
  const router = useRouter()
  const { user } = useAuth()
  const [order, setOrder] = useState<orders>()
  const [temple, setTemple] = useState<templeInterface>()
  const [total, setTotal] = useState<number>(0)

  const fetchFromLocalStorage = (
    setValue: Dispatch<SetStateAction<any | undefined>>,
    localName: string
  ) => {
    const localTemp = window.localStorage.getItem(localName) as string
    setValue(JSON.parse(localTemp) as orders)
  }

  useEffect(() => {
    if (!order || !temple) {
      fetchFromLocalStorage(setOrder, '@TD-order')
      fetchFromLocalStorage(setTemple, '@TD-order-temple')
    }
  })

  useEffect(() => {
    if (order) {
      setTotal(
        Object.keys(order).reduce(
          (sum, key) => sum + order[key].quantity * order[key].shopItem.price,
          0
        )
      )
    }
  })

  const handleCheckout = () => {
    axios.post(getApiURL(`orders`), { temple, order, cId: user.uid })
    window.localStorage.removeItem('@TD-order-temple')
    window.localStorage.removeItem('@TD-order')
    router.push(router.asPath.replace('/summary', '/finish'))
  }

  return (
    <Layout>
      <BackButton />
      {temple && (
        <div className="px-5 pt-10 pb-5 text-center">
          <div className="text-4xl font-bold">Order Summary</div>
          <div className="flex items-center justify-center mt-2 text-sm font-light text-gray-400">
            <MaterialIcons icon="places" className="-mr-2 text-sm" />
            {`${temple.name}, ${temple.location.city}, ${temple.location.province}`}
          </div>
        </div>
      )}

      <div>
        {order &&
          Object.keys(order).map((k) => {
            if (!order[k].quantity) return
            return (
              <DonationSummaryCard key={order[k].shopItem._id} d={order[k]} />
            )
          })}
      </div>

      <div className="absolute bottom-0 flex flex-col justify-center w-full p-4 space-y-2 text-center bg-white border-t rounded-t-xl">
        <div className="p-2 text-2xl">
          {`Total`}{' '}
          <span className="font-bold">{`${numeral(total).format(
            '0,0.00'
          )}`}</span>{' '}
          {`Baht`}
        </div>
        <div className="flex justify-center space-x-2">
          <button
            className="flex items-center p-2 bg-green-200 rounded-lg focus:ring-0 focus:outline-none"
            onClick={() => router.push(router.asPath.replace('/summary', ''))}
          >
            <MaterialIcons icon="add_shopping_cart" className="mr-2" />
            Edit
          </button>
          <button
            className="flex items-center p-2 bg-green-200 rounded-lg focus:ring-0 focus:outline-none"
            onClick={() => handleCheckout()}
          >
            <MaterialIcons icon="shopping_cart" className="mr-2" />
            Checkout
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default DonatePage
