import React from 'react'

const CartBuyed = ({idVenta}) => {
  return (
    <>
        {idVenta ?
        <>
            <p>Id de compra: <b>{idVenta}</b></p>
            <h1>Gracias por tu compra!</h1>
            <p>En tu perfil utiliza el id para verificar tu compra</p>
        </> :
        <div className='loader-position'><div className='loader'></div></div>}
    </>
  )
}

export default CartBuyed