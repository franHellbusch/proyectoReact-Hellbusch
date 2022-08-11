import React from 'react'
import './CartForm.css'
import { useState } from 'react'

const CartForm = ({finalizarCompra}) => {

    const [buyerData, setBuyerData] = useState({
        name: "",
        email: "",
        localidad: "",
        domicilio: "",
        celular: "",
    });

    const handleChange = ({target: {name, value}}) => {
        setBuyerData({
            ...buyerData,
            [name]: value,
        });
    };

  return (
    <>
        <h3 className='title-form'>Completa el formulario</h3>
        <form onSubmit={() => finalizarCompra(buyerData)} className='form'>
            <div className='nombre-completo'>
                <span className='placeholder'>Nombre</span>
                <input onChange={handleChange} name='name' className='inputs name-input' type="text" required/>
            </div>
            <label className='label'>Email</label>
            <input onChange={handleChange} name='email' className='inputs email-input' type="email" placeholder='@gmail.com' required/>
            <label className='label'>Direccion</label>
            <div className='direction-info'>
                <input onChange={handleChange} name='localidad' type="text" placeholder='Localidad' className='inputs direction-inputs'required/>
                <input onChange={handleChange} name='domicilio' type="text" placeholder='Domicilio' className='inputs direction-inputs' required/>
            </div>
            <label onChange={handleChange} className='label'>Celular</label>
            <input onChange={handleChange} name='celular' className='inputs tel-input' type="tel" placeholder='Telefono'required/>
            <button type='submit' onClick={() => finalizarCompra(buyerData)}>Finalizar la compra</button>
        </form>
    </>
  )
}

export default CartForm