import FooterNav from '@/components/Navigation'
import { NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'

type LayoutProps = {
  title?: string
  children: ReactNode
  nav: boolean
}

const IndexLayouts: NextPage<LayoutProps> = ({ title = 'Thumb D', children, nav = false }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      {nav && <FooterNav />}
    </>
  )
}

export default IndexLayouts
