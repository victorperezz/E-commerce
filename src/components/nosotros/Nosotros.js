
import facebook from '../../img/nosotros/facebook.png'
import '../../css/Nosotros.css'


import React from 'react'

const Nosotros = ({image}) => {
  return (
    <section className='seccionNostoros' id="SeccionNosotros">
    <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">Nosotros</h2>
    <div className='container' data-aos="zoom-in-up">
            {image.map((imagen, index) => {
              return <figure key={index} className="cardAnimation" style={{margin:'0.5rem', border:'none'}}>
                  <img className="imagenPersona" key={imagen.id} style={{width:'105px', height:'105px', borderRadius:'50%', marginTop:'0.5rem'}} src={imagen.img} alt="" />
                  <h4 className='nombre'>{imagen.nombre} {imagen.apellido}</h4>
                  <a href={imagen.github} target="_blank" rel="noopener noreferrer"><img className='github'  src={facebook} alt=""/></a>
              </figure>
            })}
        </div>
    </section>
  )
}

export default Nosotros