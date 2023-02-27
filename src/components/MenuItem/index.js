import './style.css'

const MenuItem = ({ itemName }) => {
    return (
        <li className='menu__item'>
            <a href="#" className="menu__item--link">{itemName}</a>
        </li>
    )
}

export default MenuItem;