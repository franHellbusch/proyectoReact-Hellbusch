import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import './LinkContainer.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { db } from "../Firebase/firebase"
import { getDocs, collection } from "firebase/firestore";

const LinksContainer = () => {

    const [categories, setCategories] = useState([]);
    const [drop, setDrop] = useState(false);

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
            .catch((err) => console.log(err));
    }, []);

    const dropdownCategories = () => {
        drop === true ? setDrop(false) : setDrop(true);
    }

    return (
        <div className='nav-links-container'>
            <NavLink to="/" className='nav-links'>Inicio</NavLink>
            <div className="nav-links-dropdown">
                <p className="nav-links link-dropdown-categories" onClick={dropdownCategories}>Categorias<ArrowDropDownIcon /></p>
                {drop === true && <ul className="categories-dropdown">
                    {categories.map((category, index) =>
                        <NavLink className="category-links" key={index} to={`/category/${category.categoryName}`}>{category.categoryName}</NavLink>)}
                </ul>}
            </div>
        </div>
    )
}

export default LinksContainer