import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'

import axios from 'axios'
import { getApiURL } from '@/utils/api'

import Layout from '@/layouts'

import Map from '@/components/Explore/Map'
import TempleInfoCard from '@/components/Temple/TempleInfoCard'
import SearchBox from '@/components/Explore/SearchBox'

import { templeInterface } from '~@types'

const ExplorePage = ({ temple }: { temple: templeInterface[] }) => {
  const [explorePage, setExplore] = useState<'list' | 'map'>('list')
  const [searchKw, setSearchKw] = useState('')
  const [dataFiltered, setDataFiltered] = useState<templeInterface[]>([])

  useEffect(() => {
    setDataFiltered(
      temple.filter((s) => {
        return s.name.toLowerCase().includes(searchKw.toLowerCase())
      })
    )
  }, [searchKw, temple])

  const handleShare = (d: templeInterface) => {
    if ('share' in navigator) {
      navigator
        .share({
          title: 'Thumb D',
          text: d.name,
          url: 'https://thumb-d.vercel.app/',
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error))
    }
  }

  const templeSort = (a: templeInterface, b: templeInterface) => {
    if (a.requests.length > b.requests.length) return -1
    return 1
  }

  temple.sort(templeSort)

  return (
    <Layout title="Explore" nav>
      <div
        className={`relative ${
          explorePage === 'map' ? `h-screen w-screen` : `h-full`
        }`}
      >
        <div
          className={`absolute z-50 right-5 top-5 rounded-full ${
            explorePage === 'list'
              ? 'from-brand-orange-primary to-brand-orange-secondary'
              : 'from-brand-blue-primary to-brand-blue-secondary'
          } bg-gradient-to-r p-1 w-24 text-center font-bold shadow-lg cursor-pointer`}
          onClick={() => {
            explorePage === 'list' ? setExplore('map') : setExplore('list')
          }}
        >
          <div className="w-full h-full rounded-full bg-white p-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r">
              {explorePage === 'list' ? 'Map' : 'List'}
            </span>
          </div>
        </div>
        {explorePage === 'map' && <Map d={temple} />}
        {explorePage === 'list' && (
          <div className="px-5 pb-24 pt-20 max-w-screen-sm mx-auto">
            <div className="text-center font-bold text-4xl mb-5">วัด</div>
            <SearchBox v={searchKw} setV={setSearchKw} placeHolder="หาอะไรดี" />
            <div className="space-y-5 mt-3">
              {dataFiltered.map((t) => (
                <TempleInfoCard key={t._id} d={t} onShare={handleShare} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const temple = await axios.get(getApiURL('temples'))

  return {
    props: {
      temple: temple.data.payload,
    },
  }
}

export default ExplorePage
