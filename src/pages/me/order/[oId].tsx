import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import numeral from 'numeral'
import axios from 'axios'

import Layout from '@/layouts'

import BackButton from '@/components/Navigation/BackButton'
import MaterialIcons from '@/components/Icons'

import { orderTrack } from '@/@types/order'

import { dayjs, getApiURL } from '@/utils'
import { STATUS_KEY } from '@/utils/const'

const OrderStatusDetail = ({ order }: { order: orderTrack }) => {
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const totalBalanced = order.products.reduce((sum, v) => {
      return sum + v.price * v.quantity
    }, 0)
    setTotal(totalBalanced)
  }, [order])

  return (
    <Layout>
      <div className="max-w-screen-sm mx-auto relative min-h-screen h-full">
        <BackButton variant="white" />
        <div className="aspect-w-16 aspect-h-5 z-0">
          <img src={order.temple.imgUrl} alt="" className="object-cover" />
        </div>

        <div className="p-5">
          <div className="mt-5 pb-3 border-b px-5 text-center">
            <div className="font-bold text-2xl">สรุปรายการสั่งซื้อ</div>
            <div className="font-light text-sm text-gray-400 mt-2 flex items-center justify-center space-x-2">
              <div className="flex items-center">
                <MaterialIcons icon="foundation" className="text-xl mr-2" />
                {`${order.temple.name}`}
              </div>
            </div>
            <div className="font-light text-sm text-gray-400 flex items-center justify-center space-x-2">
              <div className="flex items-center">
                <MaterialIcons icon="places" className="text-xl -mr-3" />
                {`${order.temple.location.city} ${order.temple.location.province}`}
              </div>
            </div>
            <div className="font-light text-sm text-gray-400 flex items-center justify-center space-x-2">
              <div className="flex items-center">
                <MaterialIcons icon="calendar_today" className="text-xl mr-2" />
                {`${dayjs
                  .unix(order.createdAt._seconds)
                  .format('DD MMMM YYYY')}`}
              </div>
              <div className="flex items-center">
                <MaterialIcons icon="schedule" className="text-xl mr-2" />
                {`${dayjs.unix(order.createdAt._seconds).format('HH:mm น.')}`}
              </div>
            </div>
          </div>

          <div>
            <div className="border-b p-5">
              <h1 className="font-sans font-bold text-center text-xl">
                รายการ
              </h1>
              <div className="pt-2 px-10">
                {order.products.map((p) => {
                  return (
                    <div key={p._id} className="flex justify-between">
                      <span>
                        {p.quantity}
                        {'x'} {p.name}
                      </span>
                      <span>
                        {numeral(p.price * p.quantity).format('0,0.00')}
                        {' บาท'}
                      </span>
                    </div>
                  )
                })}
                <div className="pt-4 font-bold text-center">
                  {'รวม '}
                  {numeral(total).format('0,0.00')} {' บาท'}
                </div>
              </div>
            </div>

            <div className="p-5 border-b">
              <h1 className="font-sans font-bold text-center text-xl">สถานะ</h1>
              <div className="pt-2 space-y-3">
                {order.status.map((s) => {
                  return (
                    <div
                      key={`${order._id}-${s.actionId}`}
                      className="flex last:bg-clip-text last:text-transparent last:from-brand-orange-primary last:to-brand-orange-secondary last:bg-gradient-to-r"
                    >
                      <MaterialIcons
                        icon={STATUS_KEY[s.actionId].icon}
                        className="mr-2 text-2xl"
                      />
                      <div>
                        <div className="text-xl">
                          {STATUS_KEY[s.actionId].message}
                        </div>
                        <div className="text-base font-light">
                          {dayjs
                            .unix(s.transactedAt._seconds)
                            .format('DD MMMM YYYY HH:mm น.')}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { oId } = params
  // console.log(oId)

  const order = await axios.get(getApiURL(`orders/${oId}`))
  // console.log(order)

  return {
    props: {
      order: order.data.payload,
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

export default OrderStatusDetail
