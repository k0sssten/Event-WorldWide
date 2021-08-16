import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YMaps, Map, Placemark, RouteButton, GeolocationControl, Clusterer, RoutePanel } from 'react-yandex-maps'

import style from './YandexMap.module.css'
const key = '8e9545a2-e9af-4d9c-ba75-fbb790e86b52'

function YandexMap({ coordinates }) {

  return (

    <YMaps query={{ lang: 'ru_RU', ns: "use-load-option", apikey: key }}>
      <Map width='100%' height='600px'
        defaultState={{
          center: [55.37, 35.75],
          zoom: 3,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl', 'geocode']}
      >
        <GeolocationControl options={{ float: 'left' }} />
        <Clusterer options={{ groupByCoordinates: false }}></Clusterer>

        {coordinates.map(coordinate => <Placemark
          geometry={coordinate}
          properties={{
            iconCaption: coordinate[2]
          }}
        />)}
      </Map>
    </YMaps>
  )
}

export default YandexMap;
