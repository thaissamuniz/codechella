import logoImg from '../../img/Logo1.svg'
import './style.css'

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logoImg} className='logo__img' alt="logo"/>
        </div>
    )
}

export default Logo