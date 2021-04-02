import { NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'

type LayoutProps = {
  title: string
  children: ReactNode
}

const IndexLayouts: NextPage = ({ title = 'Thumb D', children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}

export default IndexLayouts
