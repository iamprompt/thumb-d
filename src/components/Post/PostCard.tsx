import Image from 'next/image'

import { MaterialIcons } from '@/components/Icons'

import { postInterface } from '~@types'

import { dayjs } from '@/utils'

const PostCard = ({ d }: { d: postInterface }) => (
  <div className="flex flex-col bg-white shadow-xl rounded-lg mt-5">
    <div className="flex flex-row items-center pt-4 px-4 space-x-4">
      <div className="mr-1 w-12 h-12">
        <Image
          src={d.author.imgUrl}
          width={100}
          height={100}
          objectFit="cover"
          className="rounded-full shadow"
        />
      </div>
      <div>
        <div className="text-lg font-bold">{d.author.name}</div>
        <div className="text-xs">{dayjs(d.datePosted).fromNow()}</div>
      </div>
    </div>
    <div className="flex p-4 pt-3">
      <p className="text-sm bg-white line-clamp-3">{d.message}</p>
    </div>
    {d.imgUrl && (
      <div>
        <Image
          src={d.imgUrl}
          width={100}
          height={62.5}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    )}
    <div className="grid grid-cols-3 border-t bg-clip-text text-transparent bg-gradient-to-t from-[#F06129] to-[#FF9A3D]">
      <div className="flex p-1 items-center justify-center align-middle text-center border-r text-sm">
        <MaterialIcons icon="favorite" className="mr-1 !text-sm" /> Sadhu
      </div>
      <div className="flex p-1 items-center justify-center align-middle text-center text-sm">
        <MaterialIcons icon="comment" className="mr-1 !text-sm" /> Comment
      </div>
      <div className="flex p-1 items-center justify-center align-middle text-center border-l text-sm">
        <MaterialIcons icon="share" className="mr-1 !text-sm" /> Share
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
