import './style.css';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

// function ativeMenu() {
//     const screenSize = window.screen.width;
//     if (screenSize === 360) {

//     }
// }
const MenuDesk = () => {
    const menuItens = [
        { name: 'A Expêriencia', url: 'https://www.google.com' },
        { name: 'Mapa de Setores', url: 'https://wwww.facebook.com' },
        { name: 'Informações', url: 'https://wwww.facebook.com' },
        { name: 'Ingresso', url: 'https://wwww.facebook.com' }
    ]
    return (
        <header className='menu'>
            <Logo />
            <ul>
                {
                    menuItens.map(item => <li className='menu__item' key={item.name}><Link className='menu__link' to={item.url}>{item.name}</Link></li>)
                }
            </ul>
        </header>
    )

}

export default MenuDesk;