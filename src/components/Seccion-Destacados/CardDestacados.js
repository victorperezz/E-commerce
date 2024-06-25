

import React from 'react'
import { useState } from 'react';
import './cardDestacados.css'
import Modal from './Modal';
import ModalComprar from './ModalComprar';



const CardDestacados = ({ prod, addToCart }) => {
    const [mostrar, setMostrar] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalComprar, setModalComprar] = useState(false)

    return (
        <>
            <div className='card-container'
                onMouseEnter={() => setMostrar(true)}
                onMouseLeave={() => setMostrar(false)}
            >
                <figure className='card-figure' >
                    <div className='card-image'>
                        <img src={prod.img} alt="iamgen"></img>
                    </div>
                    <figcaption className='container-parrafo'>
                        <h3>{prod.titulo}</h3>
                        <div className='parrafo'>
                            {mostrar && <div className="precio"><strong>$ {prod.precio}</strong></div>}
                            {mostrar && <div className="antes">Antes <strike>$ {prod.antes}</strike></div>}
                        </div>
                        <p className='discount'>{prod.discount}</p>
                        <div className='button'>
                            {mostrar && <button className='button-comprar' onClick={() => setModalComprar(true)}>Agregar al carrito</button>}
                            <ModalComprar modalComprar={modalComprar} setModalComprar={setModalComprar} prod={prod} addToCart={addToCart}/>
                            {mostrar && <button className='button-detalles' onClick={() => setModal(true)}>Ver Detalles</button>}
                            <Modal modal={modal} setModal={setModal} prod={prod} />
                        </div>

                    </figcaption>
                </figure>
            </div>
        </>
    )
}

export default CardDestacados;