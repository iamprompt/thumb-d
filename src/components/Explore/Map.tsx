import { useEffect, useRef } from 'react'
import { renderToString } from 'react-dom/server'

import { templeInterface } from '~@types'

import TempleInfoWindow from '@/components/Temple/TempleInfoWindowMap'

type Props = {
  d: templeInterface[]
}

const Map = ({ d }: Props) => {
  const currentPos: { lat: number; lng: number } = {
    lat: 13.766995893280452,
    lng: 100.49558974806541,
  }

  // const setCurrentLoc = () => {
  //   if (!('geolocation' in navigator)) return

  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     return map?.setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude })
  //   })
  // }

  const gMapDivRef = useRef<HTMLDivElement>(null)
  let map: google.maps.Map | undefined = undefined

  const generateInfoWindow = (d: templeInterface) =>
    renderToString(<TempleInfoWindow key={d._id} d={d} />)

  const placeMarkers = (data: templeInterface[]) => {
    const infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow()

    data.map((d) => {
      const marker: google.maps.Marker = new google.maps.Marker({
        position: { lat: d.pos._latitude, lng: d.pos._longitude },
        map,
      })

      marker.addListener('click', () => {
        infoWindow.setContent(generateInfoWindow(d))
        infoWindow.setPosition({ lat: d.pos._latitude, lng: d.pos._longitude })
        infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) })
        infoWindow.open(map)
      })
    })
  }

  const mapLoad = () => {
    const mapOptions: google.maps.MapOptions = {
      center: currentPos,
      zoom: 13,
      mapTypeId: 'roadmap',
      disableDefaultUI: true,
    }

    if (map === undefined && gMapDivRef.current !== null) {
      map = new google.maps.Map(gMapDivRef.current, mapOptions)
      gMapDivRef.current.style.position = 'absolute'
      // setCurrentLoc()
      placeMarkers(d)
    }
  }

  useEffect(() => {
    // if ('geolocation' in navigator)
    //   navigator.geolocation.getCurrentPosition((pos) => {
    //     currentPos = { lat: pos.coords.latitude, lng: pos.coords.longitude }
    //   })

    if (window.google) {
      mapLoad()
      return
    }

    const googleMapScript = document.createElement('script')
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places&region=TH&language=th&v=weekly`
    googleMapScript.async = true
    window.document.body.appendChild(googleMapScript)
    googleMapScript.addEventListener('load', () => {
      mapLoad()
    })
    return
  })

  return (
    <>
      <div id="map" ref={gMapDivRef} className="h-full w-full"></div>
    </>
  )
}

export default Map
