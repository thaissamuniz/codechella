import './style.css'
const { NavLink } = require("react-router-dom")

const MenuLink = ({ children, to }) => {
    return (
        <NavLink className='menu__link' to={to} end> {children} </NavLink>
    )
}

export default MenuLink;