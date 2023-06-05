import './style.css';
import Logo from '../Logo';
import MenuLink from 'components/MenuLink';

const MenuDesk = () => {
    const menuItens = [
        { name: 'A Expêriencia', url: '/aexperiencia' },
        { name: 'Mapa de Setores', url: '/mapa-setores' },
        { name: 'Informações', url: '/informacoes' },
        { name: 'Ingresso', url: '/ingresso' }
    ]
    return (
        <header className='menu'>
            <MenuLink to={'/'}>
                <div className='menu__logo--tbt'>
                    <Logo />
                </div>
            </MenuLink>
            <ul className='menu__list'>
                {
                    menuItens.map(item => <li className='menu__item--dsk' key={item.name}><MenuLink to={item.url}>{item.name}</MenuLink></li>)
                }
            </ul>
        </header>
    )

}

export default MenuDesk;