import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import tw from 'twin.macro'

import { templeInterface } from '~@types'

const TempleCard = tw.div`flex flex-col bg-white shadow-xl rounded-xl font-serif`
const CardHeaderContainer = tw.div`grid grid-cols-5 py-4 px-4 gap-3 border-b`
const CardBodyContainer = tw.div`pt-4 px-4 gap-4`
const ButtonContainer = tw.div`py-2 px-4 grid grid-cols-2`
const ActionButton = tw.div`flex m-2 p-2 text-white font-bold font-sans rounded-lg items-center justify-center cursor-pointer`

const TempleInfoCard = ({
  d,
  onShare,
}: {
  d: templeInterface
  onShare: (d: templeInterface) => void
}) => {
  const router = useRouter()
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    if ('share' in navigator) setCanShare(true)
  })

  return (
    <TempleCard>
      <CardHeaderContainer>
        <div className="col-span-2">
          <Image
            src={d.imgUrl}
            width={100}
            height={56.25}
            layout="responsive"
            objectFit="cover"
            className="rounded-xl mr-4 shadow"
          />
        </div>
        <div className="flex flex-col justify-center items-end col-span-3">
          <div className="text-2xl font-bold text-right">{d.name}</div>
          {/* <div className="text-lg text-right">ข้อมูลเพิ่มเติม</div> */}
        </div>
      </CardHeaderContainer>
      {d.requests.length > 0 && (
        <CardBodyContainer>
          <div className="flex items-center justify-center font-bold text-xl">
            สิ่งของที่ต้องการ
          </div>
          {d.requests.map((r) => (
            <div key={r._id} className="flex justify-between mt-2 px-7">
              <div className="text-lg font-bold">{r.name}</div>
              <div className="text-lg">
                {r.reqAmount} {r.unit}
              </div>
            </div>
          ))}
        </CardBodyContainer>
      )}
      <ButtonContainer>
        <ActionButton
          className={`bg-gradient-to-r from-brand-orange-primary to-brand-orange-secondary ${
            !canShare ? 'col-span-2' : ''
          }`}
          onClick={() => router.push(`/temple/${d._id}/donate`)}
        >
          บริจาค
        </ActionButton>
        {canShare && (
          <ActionButton
            className="bg-gradient-to-r from-brand-blue-primary to-brand-blue-secondary"
            onClick={() => onShare(d)}
          >
            บอกบุญ
          </ActionButton>
        )}
      </ButtonContainer>
    </TempleCard>
  )
}

export default TempleInfoCard
