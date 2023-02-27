import './style.css'
import Logo from "../Logo"
import MenuButton from "../MenuButton"

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <MenuButton />
        </header>
    )
}

export default Header