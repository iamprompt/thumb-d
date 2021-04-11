import {
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next'
import axios from 'axios'
import nookies from 'nookies'

import Layout from '@/layouts'

import BackButton from '@/components/Navigation/BackButton'
import OrderListCard from '@/components/Order/OrderListCard'

import { orderTrack } from '~@types/order'

import { getApiURL } from '@/utils'

const OrderStatus = ({ order }: { order: orderTrack[] }) => {
  return (
    <Layout nav>
      <div className="p-5 min-h-screen">
        <BackButton />
        <div className="mt-14 mb-10 text-center">
          <div className="text-4xl font-bold">Order Status</div>
        </div>
        <div className="max-w-xl grid-cols-1 mx-auto space-y-5">
          {order.map((item) => (
            <OrderListCard key={item._id} d={item} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const order = await axios.get(getApiURL('orders'))

//   return {
//     props: {
//       order: order.data.payload,
//     },
//   }
// }

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    console.log(cookies)

    const order = await axios.get(getApiURL('orders'), {
      headers: { authorization: cookies.token },
    })

    return {
      props: {
        order: order.data.payload,
      },
    }
  } catch (err) {
    return { props: {} as never }
  }
}

export default OrderStatus
