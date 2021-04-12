import Image from 'next/image'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import tw from 'twin.macro'

import { templeInterface } from '~@types'

const TempleCard = tw.div`flex flex-col w-[300px] font-serif`
const CardHeaderContainer = tw.div`grid grid-cols-5 pb-2 gap-2 border-b`
const CardBodyContainer = tw.div`pt-4 gap-4`
const ButtonContainer = tw.div`pt-4`
const ActionButton = tw.div`flex py-2 bg-gradient-to-r from-brand-orange-primary to-brand-orange-secondary text-white font-bold font-sans rounded-lg items-center justify-center cursor-pointer`

const TempleInfoCard = ({ d }: { d: templeInterface }) => {
  return (
    <Router>
      <TempleCard>
        <CardHeaderContainer>
          <div className="col-span-2">
            <Image
              src={d.imgUrl}
              width={100}
              height={56.25}
              layout="responsive"
              objectFit="cover"
              className="mr-4 shadow rounded-xl"
              priority={true}
            />
          </div>
          <div className="flex flex-col items-end justify-center col-span-3">
            <div className="text-lg font-bold text-right">{d.name}</div>
          </div>
        </CardHeaderContainer>
        {d.requests.length > 0 && (
          <CardBodyContainer>
            <div className="flex items-center justify-center text-lg font-bold">
              Needed Items
            </div>
            {d.requests.slice(0, 2).map((r) => (
              <div key={r._id} className="flex justify-between mt-2">
                <div className="font-bold text-md">{r.name}</div>
                <div className="text-md">
                  {r.reqAmount} {r.unit}
                </div>
              </div>
            ))}
          </CardBodyContainer>
        )}
        <ButtonContainer>
          <Link to={`/temple/${d._id}/donate`}>
            <ActionButton>Donate</ActionButton>
          </Link>
        </ButtonContainer>
      </TempleCard>
    </Router>
  )
}

export default TempleInfoCard
