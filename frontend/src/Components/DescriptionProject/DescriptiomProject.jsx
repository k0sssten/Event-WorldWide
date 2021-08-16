import style from './Description.module.css'
import styleContainer from '../Container/container.module.css'
import { useEffect, useRef } from 'react';

function DescriptionProject() {
  useEffect(()=> {
    showEventTitle()
    showDescription()
  }, [])
  
  window.onload = function() {
    setTimeout(()=> {
      showEventTitle()
      showDescription()
    }, 2000)
    
  }

  const showEventTitle = () => {
    eventTitle.current.style.marginLeft = '0'
    eventTitle.current.style.opacity = '1'
  }

  const showDescription = () => {
    description.current.style.marginLeft = '0'
    description.current.style.opacity = '1'
  }


  const eventTitle = useRef(null)
  const description = useRef(null)

  

  return (
    <>
      <section className={style.sectionDescriptionProject}>
        <div className={styleContainer.container + ' ' + style.containerDescription}>
          <h1 ref={eventTitle} className={style.sectionDescriptionTitle}>Event worldwide</h1>
          <p ref={description} className={style.sectionDescriptionText}>
             Find your next event
          </p>
        </div>
      </section>
    </>
  )
}

export default DescriptionProject
