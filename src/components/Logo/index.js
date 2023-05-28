import logoImg from '../../img/Logo1.svg'
import './style.css'

const Logo = () => {
    return (
        <>
            <img src={logoImg} className='logo__img' alt="logo"/>
        </>
    )
}

export default Logo