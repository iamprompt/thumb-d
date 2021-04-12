import Image from 'next/image'

import { MaterialIcons } from '@/components/Icons'

import { postInterface } from '~@types'

import { dayjs } from '@/utils'

const PostCard = ({ d }: { d: postInterface }) => (
  <div className="flex flex-col mt-5 bg-white rounded-lg shadow-xl">
    <div className="flex flex-row items-center px-4 pt-4 space-x-4">
      <div className="w-12 h-12 mr-1">
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
    <div className="grid grid-cols-3 py-2 border-t bg-clip-text text-transparent bg-gradient-to-t from-[#F06129] to-[#FF9A3D]">
      <div className="flex items-center justify-center p-1 text-sm text-center align-middle border-r">
        <MaterialIcons icon="favorite" className="mr-1 !text-sm" /> Sadhu
      </div>
      <div className="flex items-center justify-center p-1 text-sm text-center align-middle">
        <MaterialIcons icon="comment" className="mr-1 !text-sm" /> Comment
      </div>
      <div className="flex items-center justify-center p-1 text-sm text-center align-middle border-l">
        <MaterialIcons icon="share" className="mr-1 !text-sm" /> Share
      </div>
    </div>
    {d.comments?.map((cm) => (
      <div
        key={dayjs(cm.datePosted).utcOffset()}
        className="bg-gray-100 border-t"
      >
        <div className="p-2 m-3 bg-gray-200 rounded-md">
          <div className="text-sm font-bold">
            {cm.author.name}{' '}
            <span className="text-xs font-normal">
              - {dayjs(cm.datePosted).fromNow()}
            </span>
          </div>
          <div className="font-serif text-xs font-light">{cm.message}</div>
        </div>
      </div>
    ))}
    <div className="flex p-3 border-t rounded-b-lg bg-gray-50">
      <input
        type="text"
        name="commentText"
        id="commentText"
        placeholder="What do you think?"
        className="flex-1 text-xs bg-gray-200 border-gray-200 rounded-full outline-none focus:outline-none focus:ring-0 focus:ring-gray-400 focus:border-gray-400 focus:bg-gray-100"
      />
      <MaterialIcons
        icon="send"
        className="!text-sm m-2 bg-clip-text text-transparent bg-gradient-to-t from-brand-orange-primary to-brand-orange-secondary cursor-pointer"
      />
    </div>
  </div>
)

export default PostCard
