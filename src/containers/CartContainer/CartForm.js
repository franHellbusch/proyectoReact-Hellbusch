import React from 'react'
import './CartForm.css'
import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'

const CartForm = ({ finalizarCompra }) => {

    const { user } = useAuthContext();

    const [buyerData, setBuyerData] = useState({
        name: user.displayName || "",
        email: user.email,
        localidad: "",
        domicilio: "",
        celular: user.phoneNumber || "",
    });

    // const handleChange = ({ target: { name, value } }) => {
    //     setBuyerData({
    //         ...buyerData,
    //         [name]: value,
    //     });
    // };

    const handleChange = ({ target: { value }}) => {
        const getProvicias = async () => {
            const res = await fetch("https://apis.datos.gob.ar/georef/api/provincias",);
            const data = await res.json()
            data.provincias.filter(product => {
                return (
                    product.nombre.toLowerCase().includes(value.toLowerCase()) || "no se encontro"
                );
            }
            );
        }
        const provincias = getProvicias();
    }

    return (
        <>
            {!user.displayName &&
                <div className="user-box">
                    <input onChange={handleChange} type="text" name='text' required />
                    <label>Nombre y Apellido</label>
                </div>}
            {!user.email &&
                <div className="user-box">
                    <input onChange={handleChange} type="text" name='email' required />
                    <label>Email</label>
                </div>}
            <div className="user-box">
                <input onChange={handleChange} type="text" name='email' required />
                <label>Localidad</label>
                <ul>

                </ul>
            </div>
            <div className="user-box">
                <input onChange={handleChange} type="text" name='email' required />
                <label>Domicilio</label>
            </div>
            {!user.phoneNumber &&
                <div className="user-box">
                    <input onChange={handleChange} type="text" name='email' required />
                    <label>Numero de telefono</label>
                </div>}

            {/* <h3 className='title-form'>Completa el formulario</h3>
            <form onSubmit={() => finalizarCompra(buyerData)} className='form'>
                <div className='nombre-completo'>
                    <span className='placeholder'>Nombre</span>
                    <input onChange={handleChange} name='name' className='inputs name-input' type="text" required />
                </div>
                <label className='label'>Email</label>
                <input onChange={handleChange} name='email' className='inputs email-input' type="email" placeholder='@gmail.com' required />
                <label className='label'>Direccion</label>
                <div className='direction-info'>
                    <input onChange={handleChange} name='localidad' type="text" placeholder='Localidad' className='inputs direction-inputs' required />
                    <input onChange={handleChange} name='domicilio' type="text" placeholder='Domicilio' className='inputs direction-inputs' required />
                </div>
                <label onChange={handleChange} className='label'>Celular</label>
                <input onChange={handleChange} name='celular' className='inputs tel-input' type="tel" placeholder='Telefono' required />
                <button type='submit' onClick={() => finalizarCompra(buyerData)}>Finalizar la compra</button>
            </form> */}
        </>
    )
}

export default CartForm