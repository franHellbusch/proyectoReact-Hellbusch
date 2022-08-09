import './FormBienvenida.css'

const FormBienvenida = () => {
  return (
    <div className='bienvenida'>
        <h2 className='title-bienvenida'>Bienvenido</h2>
        <img className='img-bienvenida' src="https://firebasestorage.googleapis.com/v0/b/tiendaonline-react-34a28.appspot.com/o/background-formulario.jpg?alt=media&token=276faa87-d115-4560-954d-6fa75a670211" alt="img-bienvenida" />
        <div className='controls-form'>
            <button className='button-logup'>Log In</button>
            <button className='button-singup'>Sing Up</button>
            <button className='button-sinlog'>Ingresar sin log</button>
        </div>
    </div>
  )
}

export default FormBienvenida