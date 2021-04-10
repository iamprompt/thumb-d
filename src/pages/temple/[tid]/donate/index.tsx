import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import axios from 'axios'

import numeral from 'numeral'

import { ParsedUrlQuery } from 'querystring'

import { templeInterface, orders, templeRequestItem } from '~@types'

import Layout from '../../../../layouts'

import TempleRequestCard from '@/components/Temple/TempleRequestCard'
import { MaterialIcons } from '@/components/Icons'

import { getApiURL } from '../../../../utils/api'

const DonatePage = ({ temple, initOrder }: { temple: templeInterface; initOrder: orders }) => {
  const router = useRouter()

  const [isFetch, setFetch] = useState<boolean>(false)
  const [order, setOrder] = useState<orders>(initOrder)
  const [total, setTotal] = useState<number>(0)

  const changeOrderValue = (p: templeRequestItem, currentCount: number, v: number) => {
    console.log(p)
    if (order[p._id].quantity + v >= 0 && order[p._id].quantity + v <= p.shopItem.inStock) {
      setOrder({ ...order, [p._id]: { ...order[p._id], quantity: currentCount + v } })
    }
  }

  useEffect(() => {
    setTotal(Object.keys(order).reduce((sum, key) => sum + order[key].quantity * order[key].shopItem.price, 0))
  })

  useEffect(() => {
    if (!isFetch) {
      const templeLocal = fetchFromLocalStorage('@TD-order-temple') as templeInterface
      if (router.query.tid !== templeLocal?._id) {
        window.localStorage.removeItem('@TD-order-temple')
        window.localStorage.removeItem('@TD-order')
      }

      const orderLocal = fetchFromLocalStorage('@TD-order') as orders

      if (orderLocal) {
        setOrder(orderLocal)
      } else {
        setOrder(initOrder)
      }
      setFetch(true)
    }
  })

  const fetchFromLocalStorage = (localName: string) => {
    const localTemp = window.localStorage.getItem(localName) as string
    return JSON.parse(localTemp)
  }

  return (
    <Layout>
      <div className="aspect-w-16 aspect-h-5 z-0">
        <img src={temple.imgUrl} alt="" className="object-cover" />
      </div>

      <div className="mt-10 px-5 text-center">
        <div className="font-bold text-4xl">{temple.name}</div>
        <div className="font-light text-sm text-gray-400 mt-2 flex items-center justify-center">
          <MaterialIcons icon="places" className="text-sm -mr-2" />
          {`${temple.location.city} ${temple.location.province}`}
        </div>
      </div>

      <div className={`mt-7 ${total > 0 ? 'pb-24' : 'pb-10'} max-w-screen-md md:mx-auto`}>
        {temple.requests.map((p) => (
          <TempleRequestCard key={p._id} d={p} value={order} onUpdate={changeOrderValue} onInput={setOrder} />
        ))}
      </div>
      {total > 0 ? (
        <div className="flex fixed bottom-0 w-full bg-white border-t p-4 rounded-t-xl justify-between">
          <div className="p-2 font-bold">
            {'รวม '}
            {numeral(total).format('0,0.00')} {' บาท'}
          </div>
          <button
            className="p-2 bg-green-200 rounded-lg focus:ring-0 focus:outline-none flex items-center"
            onClick={() => {
              window.localStorage.setItem('@TD-order-temple', JSON.stringify(temple))
              window.localStorage.setItem('@TD-order', JSON.stringify(order))
              window.localStorage.setItem('@TD-order-timestamp', dayjs().toISOString())
              router.push(`${router.asPath}/summary`)
            }}
          >
            <MaterialIcons icon="shopping_cart" className="mr-2" />
            Checkout
          </button>
        </div>
      ) : (
        ''
      )}
    </Layout>
  )
}

interface IParams extends ParsedUrlQuery {
  tid: string
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { tid: templeId } = ctx.params as IParams

  console.log(`Temple ID: ${templeId}`)

  const temple = await axios.get(getApiURL(`temples/${templeId}`))

  if (!temple.data.payload) return { redirect: { destination: '/' }, props: { temple: undefined } }

  //console.log(temple.data.payload)

  const order = temple.data.payload.requests.reduce(
    (s: orders, v: any) => ({ ...s, [v._id]: { shopItem: v.shopItem, quantity: 0 } }),
    {}
  )

  //console.log(order)

  return {
    props: {
      temple: temple.data.payload,
      initOrder: order,
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

export default DonatePage
