import { NextPage } from 'next'
import Layout from '@/layouts'

import { MaterialIcons } from '@/components/Icons'
import { FooterNav } from '@/components/Navigation'

const IndexPage: NextPage = () => (
  <Layout>
    <h1>Hello Next.js 👋</h1>
    <MaterialIcons icon="settings" className="!text-4xl" />
    <FooterNav />
  </Layout>
)

export default IndexPage
