import { NextPage } from 'next'

import Layout from '@/layouts'

import PostCard from '@/components/Post/PostCard'

import { postData } from '../utils/mockData'

const IndexPage: NextPage = () => {
  return (
    <Layout nav>
      <div className="max-w-screen-sm p-5 pb-24 mx-auto space-y-5">
        {postData.map((p) => (
          <PostCard key={p._id} d={p} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
