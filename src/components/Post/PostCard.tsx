import { MaterialIcons } from '@/components/Icons'

import { postInterface } from '~@types'

import { dayjs } from '@/utils'

const PostCard = ({ d }: { d: postInterface }) => (
  <div className="flex flex-col bg-white shadow-xl rounded-lg mt-5">
    <div className="flex flex-row pt-4 px-4">
      <img
        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
        src={
          d.author.imgUrl ||
          'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
        alt="avatar"
      />
      <div>
        <div className="text-xl font-bold">{d.author.name}</div>
        <div className="text-xs">{dayjs(d.datePosted).fromNow()}</div>
      </div>
    </div>
    <div className="flex p-4 pt-3">
      <p className="text-sm bg-white line-clamp-3">{d.message}</p>
    </div>
    {d.imgUrl && (
      <div className="aspect-w-16 aspect-h-10">
        <img src={d.imgUrl} alt="" className="object-cover" />
      </div>
    )}
    <div className="grid grid-cols-3 border-t bg-clip-text text-transparent bg-gradient-to-t from-[#F06129] to-[#FF9A3D]">
      <div className="flex p-1 items-center justify-center align-middle text-center border-r text-sm">
        <span className="material-icons mr-1 text-sm">favorite</span> Sadhu
      </div>
      <div className="flex p-1 items-center justify-center align-middle text-center text-sm">
        <span className="material-icons mr-1 text-sm">comment</span> Comment
      </div>
      <div className="flex p-1 items-center justify-center align-middle text-center border-l text-sm">
        <span className="material-icons mr-1 text-sm">share</span> Share
      </div>
    </div>
    {d.comments?.map((cm) => (
      <div
        key={dayjs(cm.datePosted).utcOffset()}
        className="bg-gray-100 border-t"
      >
        <div className="m-3 bg-gray-200 p-2 rounded-md">
          <div className="text-sm font-bold">
            {cm.author.name}{' '}
            <span className="font-normal text-xs">
              - {dayjs(cm.datePosted).fromNow()}
            </span>
          </div>
          <div className="text-xs font-light font-serif">{cm.message}</div>
        </div>
      </div>
    ))}
    <div className="bg-gray-50 flex p-3 border-t rounded-b-lg">
      <input
        type="text"
        name="commentText"
        id="commentText"
        placeholder="What do you think?"
        className="text-xs flex-1 outline-none focus:outline-none focus:ring-0 focus:ring-gray-400 border-gray-200 focus:border-gray-400 rounded-full bg-gray-200 focus:bg-gray-100"
      />
      <MaterialIcons
        icon="send"
        className="!text-sm m-2 bg-clip-text text-transparent bg-gradient-to-t from-brand-orange-primary to-brand-orange-secondary cursor-pointer"
      />
    </div>
  </div>
)

export default PostCard
