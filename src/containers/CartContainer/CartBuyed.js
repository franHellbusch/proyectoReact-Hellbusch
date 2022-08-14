import React from 'react'

const CartBuyed = ({idVenta}) => {
  return (
    <>
        {idVenta ?
        <>
            <h1>Gracias por tu compra!</h1>
            <p>Id: <b>{idVenta}</b></p>
        </> :
        <h1>Loading...</h1>}
    </>
  )
}

export default CartBuyed