import { GetServerSidePropsContext } from 'next'
import axios from 'axios'
import nookies from 'nookies'

import Layout from '@/layouts'

// import BackButton from '@/components/Navigation/BackButton'
import OrderListCard from '@/components/Order/OrderListCard'

import { orderTrack } from '~@types/order'

import { getApiURL } from '@/utils'
import { useAuth } from '@/utils/auth'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const OrderStatus = ({ order }: { order: orderTrack[] }) => {
  const router = useRouter()
  const { user, loading, signout } = useAuth()
  useEffect(() => {
    if (!user && !loading) {
      router.push('/auth/login')
    }
  }, [user, loading])
  return (
    <Layout nav>
      <div className="min-h-screen p-5 pb-24">
        {/* <BackButton /> */}
        <div className="mb-10 text-center mt-14">
          <div className="text-4xl font-bold">Order Status</div>
        </div>
        <div className="max-w-xl grid-cols-1 mx-auto space-y-5">
          {user &&
            order.map((item) => <OrderListCard key={item._id} d={item} />)}
        </div>
        <div className="flex items-center justify-center px-5 mt-10">
          <div
            className="px-20 py-2 font-bold text-white bg-gray-200 rounded-full cursor-pointer"
            onClick={() => signout()}
          >
            Sign out
          </div>
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
