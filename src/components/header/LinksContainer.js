import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import './LinkContainer.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const LinksContainer = () => {

    const [ categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products/categories");
                const data = await res.json();
                setCategories(data)
            } catch (err) {
                console.err(err)
            }
        }
        getCategories()
    }, []);

    const dropdownDisplay = () =>{
        let dropdown = document.getElementById("categoriesDropdown")
        dropdown.className.includes("dropdown-closed") === true ? dropdown.classList.remove("dropdown-closed") : dropdown.classList.add("dropdown-closed")
    };

  return (
    <div className='nav-links-container'>
        <NavLink to="/" className='nav-links'>Inicio</NavLink>
        <div className="nav-links-dropdown">
            <a className="nav-links link-dropdown-categories" href="#" onClick={dropdownDisplay}>Categorias<ArrowDropDownIcon /></a>
            <ul id="categoriesDropdown" className="categories-dropdown dropdown-closed">
                {categories.map((category, index) =>
                    <NavLink className="category-links" key={index} to={`/category/${category}`}>{category}</NavLink>
                )}
            </ul>
        </div>
        <a className="nav-links" href="#">Contacto</a>
    </div>
  )
}

export default LinksContainer