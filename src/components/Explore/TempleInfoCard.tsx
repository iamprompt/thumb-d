import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import tw from 'twin.macro'

import { templeInterface } from '~@types'

const ActionButton = tw.div`flex m-2 p-2 text-white font-bold font-sans rounded-lg items-center justify-center`

const TempleInfoCard = ({ d, onShare }: { d: templeInterface; onShare: (d: templeInterface) => void }) => {
  const router = useRouter()
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    if ('share' in navigator) setCanShare(true)
  })

  return (
    <div className="flex flex-col bg-white shadow-xl rounded-xl font-serif">
      <div className="grid grid-cols-5 py-4 px-4 gap-4 border-b">
        <div className="aspect-w-3 aspect-h-2 col-span-2">
          <img className="rounded-xl object-cover mr-4 shadow" src={d.imgUrl || ''} alt="avatar" />
        </div>
        <div className="flex flex-col justify-center items-end col-span-3">
          <div className="text-2xl font-bold text-right">{d.name}</div>
          {/* <div className="text-lg text-right">ข้อมูลเพิ่มเติม</div> */}
        </div>
      </div>
      {d.requests.length > 0 && (
        <div className="pt-4 px-4 gap-4">
          <div className="flex items-center justify-center font-bold text-xl">สิ่งของที่ต้องการ</div>
          {d.requests.map((r) => (
            <div key={r._id} className="flex justify-between mt-2 px-7">
              <div className="text-lg font-bold">{r.name}</div>
              <div className="text-lg">
                {r.reqAmount} {r.unit}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="py-2 px-4 grid grid-cols-2">
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
      </div>
    </div>
  )
}

export default TempleInfoCard
