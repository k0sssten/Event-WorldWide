import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getRandomEventPoster } from '../../redux/actions/posterAC';
import Poster from '../Poster/Poster';
import styleContainer from '../Container/container.module.css'



function PosterList() {

  const posterList = useSelector(state => state.poster);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRandomEventPoster())
  }, [])


  return (
    <div className={styleContainer.container}>
      <Carousel autoplay>
        {posterList.map(el =>
          <Poster key={el.id} id={el.id} img={el.images[5].url} title={el.name}>
          </Poster>
        )}
      </Carousel>
    </div>
  )
}

export default PosterList;
