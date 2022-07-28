import React from 'react'
import './CartForm.css'

const CartForm = ({finalizarCompra}) => {

    const buyerData = {
        nombre: '',
        apellido: '',
        email:''
    }

  return (
    <>
        <h3 className='title-form'>Completa el formulario</h3>
        <form onSubmit={ev => ev.preventDefault()} className='form'>
            <div className='nombre-completo'>
                <input name='nombre' className='inputs name-inputs' type="text" placeholder='Nombre' required/>
                <input name='apellido' id='lastNameInput' className='inputs name-inputs' type="text" placeholder='Apellido' required/>
            </div>
            <label className='label'>Email</label>
            <input name='email' className='inputs email-input' type="email" placeholder='@gmail.com' required/>
            <label className='label'>Direccion</label>
            <div className='direction-info'>
                <input type="text" placeholder='Localidad' className='inputs direction-inputs'required/>
                <input type="text" placeholder='Domicilio' className='inputs direction-inputs' required/>
            </div>
            <label className='label'>Celular</label>
            <input className='inputs tel-input' type="tel" placeholder='Telefono'required/>
            <button type='submit' onClick={() => finalizarCompra(buyerData)}>Finalizar la compra</button>
        </form>
    </>
  )
}

export default CartForm