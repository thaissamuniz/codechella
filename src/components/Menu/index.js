import Logo from 'components/Logo';
import './style.css';
import MenuButton from "components/MenuButton"
import { useState } from "react"

const Menu = () => {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    }
    return (
        <div className='menu__mob'>
            <div className='menu__head'>
                <Logo />
                <button className='menu__open' onClick={ToggleMode}></button>
            </div>
            <nav className={'menu__item' + (active ? " menu__item--open" : '')}>
                <ul className='menu__items'>
                    <li>A Experiência</li>
                    <li>Mapa de setores</li>
                    <li>Informações</li>
                    <li>Ingressso</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu