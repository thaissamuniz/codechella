import Logo from 'components/Logo';
import './style.css';
import MenuButton from "components/MenuButton"
import { useState } from "react"
import MenuLink from 'components/MenuLink';

const Menu = () => {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    }

    const menuItens = [
        { name: 'A Expêriencia', url: '/aexperiencia' },
        { name: 'Mapa de Setores', url: '/mapa-setores' },
        { name: 'Informações', url: '/informacoes' },
        { name: 'Ingresso', url: '/ingresso' }
    ]

    return (
        <div className='menu__mob'>
            <div className='menu__head'>
                <MenuLink to={'/'}>
                    <Logo />
                </MenuLink>
                <button className='menu__open' onClick={ToggleMode}></button>
            </div>
            <nav className={'menu__item' + (active ? " menu__item--open" : '')}>
                <ul className='menu__items'>
                    {
                        menuItens.map(item => <li className='menu__item--dsk' key={item.name} onClick={ToggleMode}><MenuLink to={item.url}>{item.name}</MenuLink></li>)
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Menu