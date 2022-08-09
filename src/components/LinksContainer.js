import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import './LinkContainer.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { db } from "../Firebase/firebase"
import { getDocs, collection } from "firebase/firestore";

const LinksContainer = () => {

    const [ categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesCollection = collection(db, "categories");
        getDocs(categoriesCollection)
        .then((res) => {
            const categoriesList = res.docs.map((category) => {
                return {
                    ...category.data()
                }
            })
            setCategories(categoriesList)
        })
        .catch((err) => console.log(err))
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
                    <NavLink className="category-links" key={index} to={`/category/${category.categoryName}`}>{category.categoryName}</NavLink>
                )}
            </ul>
        </div>
        <a className="nav-links" href="#">Contacto</a>
    </div>
  )
}

export default LinksContainer