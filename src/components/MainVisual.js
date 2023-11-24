import React from 'react'
import '../css/Main.scss';

const MainVisual = () => {
  return (
    <section className='MainVisual'>
      <img src={process.env.PUBLIC_URL + "/assets/images/mainVisual.jpg"} alt="" />
      <h2>Innovation meets beauty</h2>
    </section>
  )
}

export default MainVisual