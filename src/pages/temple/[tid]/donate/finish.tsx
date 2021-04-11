import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Layout from '@/layouts'

import { MaterialIcons } from '@/components/Icons'
import BackButton from '@/components/Navigation/BackButton'

const FinishPage = () => {
  const router = useRouter()
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    if ('share' in navigator) setCanShare(true)
  })

  const handleShare = () => {
    if ('share' in navigator) {
      navigator
        .share({
          title: 'Thumb D',
          text: '',
          url: 'https://thumb-d.vercel.app/',
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error))
    }
  }

  return (
    <Layout nav>
      <BackButton />
      <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
        <img src="/images/icons/check.png" alt="" />
        <div className={`text-2xl mt-10 px-10 font-bold`}>
          Thank you for making this world a better place!
        </div>
        <div className="flex flex-col space-y-5 w-full px-10 mt-10">
          <button
            className="flex items-center justify-center bg-gradient-to-r from-brand-blue-primary to-brand-blue-secondary w-full py-3 rounded-2xl shadow-md text-lg text-white focus:outline-none"
            onClick={() => router.push('/')}
          >
            Done
          </button>
          {canShare && (
            <button
              className="flex items-center justify-center bg-gradient-to-r from-brand-orange-primary to-brand-orange-secondary w-full py-3 rounded-2xl shadow-md text-lg text-white focus:outline-none"
              onClick={() => handleShare()}
            >
              <MaterialIcons icon="share" className="mr-2" />
              Share
            </button>
          )}
        </div>
      </div>
    </Layout>
  )
}
export default FinishPage
