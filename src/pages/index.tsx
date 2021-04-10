import { NextPage } from 'next'

import Layout from '@/layouts'
import { MaterialIcons } from '@/components/Icons'

const IndexPage: NextPage = () => {
  return (
    <Layout nav>
      <h1>Hello Next.js 👋</h1>
      <MaterialIcons icon="settings" className="!text-4xl" />
    </Layout>
  )
}

export default IndexPage
