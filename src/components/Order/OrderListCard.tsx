import { dayjs } from '@/utils'
import { STATUS_KEY } from '@/utils/const'
import Image from 'next/image'
import { useRouter } from 'next/router'
import tw from 'twin.macro'

import { orderTrack } from '~@types/order'
import MaterialIcons from '../Icons'
import StyledButton from '../StyledButton'

const CardContainer = tw.div`grid grid-cols-3 overflow-hidden bg-white shadow-lg rounded-xl`
const ImageContainer = tw.div`col-span-1 relative h-full w-full`
const BodyContainer = tw.div`col-span-2 p-4 flex flex-col justify-center`

const OrderListCard = ({ d }: { d: orderTrack }) => {
  const router = useRouter()

  console.log(d.createdAt._seconds)

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={d.temple.imgUrl} objectFit="cover" layout="fill" />
      </ImageContainer>
      <BodyContainer>
        <div className="text-xl font-bold">{d.temple.name}</div>
        <div className="font-serif text-xs text-gray-400">
          {dayjs.unix(d.createdAt._seconds).format('DD MMMM YYYY HH:mm น.')}
        </div>
        <div className="px-2 my-2 space-y-2 text-gray-400">
          {/* <StatusComponent
            tw="text-[0.75rem] md:text-sm"
            orderStatus={d.orderStatus}
          /> */}
          {d.status.slice(-1).map((s) => {
            return (
              <div
                key={`${d._id}-${s.actionId}`}
                className="flex last:bg-clip-text last:text-transparent last:from-brand-orange-primary last:to-brand-orange-secondary last:bg-gradient-to-r"
              >
                <MaterialIcons
                  icon={STATUS_KEY[s.actionId].icon}
                  className="mr-2"
                />
                <div>
                  <div>{STATUS_KEY[s.actionId].message}</div>
                  <div className="text-[0.5rem]">
                    {dayjs
                      .unix(s.transactedAt._seconds)
                      .format('DD MMMM YYYY HH:mm น.')}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-end">
          <StyledButton
            text="See More"
            onClick={() => router.push(`/me/order/${d._id}`)}
          />
        </div>
      </BodyContainer>
    </CardContainer>
  )
}

export default OrderListCard
