import { templeInterface } from '../../@types/places'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import tw from 'twin.macro'

const ActionButton = tw.div`flex py-2 bg-gradient-to-r from-brand-orange-primary to-brand-orange-secondary text-white font-bold font-sans rounded-lg items-center justify-center`

const TempleInfoCard = ({ d }: { d: templeInterface }) => {
  return (
    <Router>
      <div className="flex flex-col w-[200px] font-serif">
        <div className="grid grid-cols-5 pb-2 gap-2 border-b">
          <div className="aspect-w-3 aspect-h-2 col-span-2">
            <img className="rounded-xl object-cover mr-4 shadow" src={d.imgUrl || ''} alt="avatar" />
          </div>
          <div className="flex flex-col justify-center items-end col-span-3">
            <div className="text-lg font-bold text-right">{d.name}</div>
          </div>
        </div>
        {d.requests.length > 0 && (
          <div className="pt-4 gap-4">
            <div className="flex items-center justify-center font-bold text-lg">สิ่งของที่ต้องการ</div>
            {d.requests.slice(0, 2).map((r) => (
              <div key={r._id} className="flex justify-between mt-2">
                <div className="text-md font-bold">{r.name}</div>
                <div className="text-md">
                  {r.reqAmount} {r.unit}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="pt-4">
          <Link to={`/temple/${d._id}/donate`}>
            <ActionButton>บริจาค</ActionButton>
          </Link>
        </div>
      </div>
    </Router>
  )
}

export default TempleInfoCard
