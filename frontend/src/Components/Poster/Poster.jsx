import style from '../Container/container.module.css'
import stylePoster from './Poster.module.css'

const contentStyle = {
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#2a6a84',
};

function Poster({ img, title }) {
  return (
    <>
      <h3 className={stylePoster.PosterTitle}> Постеры</h3>
      <div style={{ marginTop: '30px' }} className={style.container}>
        <div style={contentStyle}>
          <img src={img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="" />
          <h3 style={{ 
            color: '#fff', 
          fontSize: '25px' }}>{title}</h3>
        </div>
      </div>
    </>
  )
}

export default Poster
