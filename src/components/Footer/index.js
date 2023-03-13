import './style.css';
import Logo from '../Logo';
import TextBox from '../TextBox';

const Footer = () => {
    return (
        <footer>
            <Logo />
            <TextBox text={'Acesse nossas redes:'} />
            <ul className='social'>
                <li>
                    <a href='https://facebook.com' target={'_blank'} className='wpp social--icon'></a>
                </li>
                <li>
                    <a href='https://twitch.com' target={'_blank'} className='twitch social--icon'></a>
                </li>
                <li>
                    <a href='https://instagram.com' target={'_blank'} className='insta social--icon'></a>
                </li>
                <li>
                    <a href='https://twitter.com' target={'_blank'} className='twitter social--icon'></a>
                </li>
            </ul>
            <TextBox text={'Desenvolvido por Thaissa.'} />
        </footer>
    )
}

export default Footer;