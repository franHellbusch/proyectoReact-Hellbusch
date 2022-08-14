import React from 'react'
import './CartForm.css'
import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'

const CartForm = ({ finalizarCompra, setFinish }) => {

    const { user } = useAuthContext();
    const [provincias, setProvincias] = useState([]);
    const [loadingProvincias, setLoadingProvincias] = useState();
    const [loading, setLoading] = useState()
    const [findingProvincias, setFindingProvincias] = useState(false);
    const [findingMuni, setFindingMuni] = useState(false);
    const [municipios, setMunicipios] = useState([]);
    const [checked, setChecked] = useState(false);

    const [buyerData, setBuyerData] = useState({
        name: user.displayName || "",
        email: user.email,
        provincia: "",
        municipio: "",
        celular: user.phoneNumber || "",
        direccion: checked ? "" : "no requerida",
    });

    const handleChange = ({ target: { name, value } }) => {
        setBuyerData({
            ...buyerData,
            [name]: value,
        });
    };

    const handleChangeProvincias = ({ target: { name, value } }) => {
        setLoadingProvincias(true)
        const getProvicias = async () => {
            setFindingProvincias(true);
            try {
                const res = await fetch("https://apis.datos.gob.ar/georef/api/provincias",);
                const data = await res.json()
                const provinciasFiltrados = data.provincias.filter(provincia => {
                    return (
                        provincia.nombre.toLowerCase().startsWith(value.toLowerCase()) === true && provincia.nombre
                    )
                }
                );
                setBuyerData({
                    ...buyerData,
                    [name]: value,
                });
                setProvincias(provinciasFiltrados);
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(() => {
                    setLoadingProvincias(false)
                }, 300);
            }
        }
        if (value.length > 0) {
            getProvicias();
        } else {
            setLoading(false);
            setFindingProvincias(false);
        }
    }

    const handleChangeMunicipios = ({ target: { name, value } }) => {
        setLoading(true)
        const getMunicipios = async () => {
            setFindingMuni(true);
            try {
                const res = await fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${buyerData.provincia}`);
                const data = await res.json()
                const municipiosFiltradas = data.municipios.filter(municipio => {
                    return (
                        municipio.nombre.toLowerCase().startsWith(value.toLowerCase()) === true && municipio.nombre
                    )
                }
                );
                setMunicipios(municipiosFiltradas);
                setBuyerData({
                    ...buyerData,
                    [name]: value,
                });
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        if (value.length > 0) {
            getMunicipios();
        } else {
            setLoading(false);
            setFindingMuni(false);
        }
    }

    const handleChecked = () => {
        checked ? setChecked(false) : setChecked(true);
    }

    return (
        <>
            <h3 className='title-form'>Completa el formulario</h3>
            <form className='form-final' onSubmit={() => finalizarCompra(buyerData)}>
                {!user.displayName &&
                    <div className="user-box">
                        <input onChange={handleChange} type="text" name='text' required />
                        <label>Nombre y Apellido</label>
                    </div>}
                <div className="user-box provincia-input">
                    <input onChange={handleChangeProvincias} type="text" name='provincia' list="listaProvincias" required />
                    <label>Provincia</label>
                    <datalist id='listaProvincias'>
                        {(findingProvincias && !loadingProvincias && provincias.length > 0) && provincias.map((provincia, index) => <option value={provincia.nombre} key={index} />)}
                    </datalist>
                </div>
                <div className="user-box municipio-input">
                    <input onChange={handleChangeMunicipios} type="text" name='municipio' list="listaMunicipios" required />
                    <label>Municipio</label>
                    <datalist id='listaMunicipios'>
                        {(findingMuni && !loading && municipios.length > 0) && municipios.map((municipio, index) => <option value={municipio.nombre} key={index} />)}
                    </datalist>
                </div>
                <div className='envio-form'>
                    <div className='checkbox-envio'>
                        <input onChange={handleChecked} type="checkbox" />
                        <label>envio a domicilio</label>
                    </div>
                    {checked &&
                        <div className="user-box">
                            <input onChange={handleChange} type="text" name='direccion' required />
                            <label>Direccion</label>
                        </div>}
                </div>
                {
                    !user.phoneNumber &&
                    <>
                        <div className="user-box number-input">
                            <input onChange={handleChange} type="tel" name="celular" list="listatelefonos" required />
                            <label>Numero de telefono</label>
                        </div>
                        <datalist id="listatelefonos">
                            <option value="(54) 000-0000000" />
                        </datalist>
                    </>
                }
                <div className='form-final-buttons'>
                    <button onClick={() => setFinish(false)} className='cancelar-compra' type="button">Cancelar</button>
                    <button className='finalizar-compra' type='submit'>Finalizar compra</button>
                </div>
            </form>
        </>
    )
}

export default CartForm