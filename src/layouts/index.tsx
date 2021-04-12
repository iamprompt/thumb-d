import FooterNav from '@/components/Navigation'
import { NextPage } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'

type LayoutProps = {
  title?: string
  children: ReactNode
  nav?: boolean
}

const IndexLayouts: NextPage<LayoutProps> = ({
  title,
  children,
  nav = false,
}: LayoutProps) => {
  return (
    <div className="min-h-screen h-full">
      <Head>
        <title>{title ? `${title} | Thumb D` : 'Thumb D'}</title>
      </Head>
      {children}
      {nav && <FooterNav />}
    </div>
  )
}

export default IndexLayouts
