
// import React from 'react'
import CardDestacados from './CardDestacados'
import './cardListDestacados.css'


const CardListDestacados = ({producto, addToCart}) => {
    return (
        <div className='cardListDestacados'>
            {
                producto.map(prod => <CardDestacados key={prod.id} prod={prod} addToCart={addToCart}/>)

            }
        </div>
    )

}

export default CardListDestacados;