import tw from 'twin.macro'
import Link from 'next/link'

import { MaterialIcons } from '@/components/Icons'

const BottomBox = tw.div`fixed bottom-0 w-full p-5 z-50`
const NavBox = tw.div`w-full shadow-lg bg-white rounded-full grid grid-cols-3 max-w-screen-sm mx-auto`
const NavItem = tw.div`flex flex-col items-center justify-center p-3 cursor-pointer`

const NavItems = [
  { title: 'Feed', href: '/', icon: 'article' },
  { title: 'Explore', href: '/explore', icon: 'travel_explore' },
  { title: 'Profile', href: '/me', icon: 'person' },
]

export const FooterNav = () => {
  return (
    <BottomBox>
      <NavBox>
        {NavItems.map((item) => (
          <Link href={item.href} key={item.title}>
            <NavItem>
              <MaterialIcons
                icon={item.icon}
                className="!text-3xl bg-clip-text text-transparent bg-gradient-to-b from-brand-orange-primary to-brand-orange-secondary"
              />
              <span className="sr-only">{item.title}</span>
            </NavItem>
          </Link>
        ))}
      </NavBox>
    </BottomBox>
  )
}

export default FooterNav
