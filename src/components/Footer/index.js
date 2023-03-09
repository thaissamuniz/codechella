import './style.css';
import { BsWhatsapp } from 'react-icons/bs';
import { BsTwitch } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import Logo from '../Logo';
import TextBox from '../TextBox';
import SocialMedia from '../SocialMedia'
const Footer = () => {
    const socialMedias = [
        {
            icone: '',
            url: "https://facebook.com",
            iconClass: "wpp"
        },
        {
            icone: '',
            url: "https://facebook.com",
            iconClass: "twitch"
        }, {
            icone: '',
            url: "https://instagram.com",
            iconClass: "insta"
        },
        {
            icone: '',
            url: "https://twitter.com",
            iconClass: "twitter"
        }
    ]
    return (
        <footer>
            <Logo />
            <TextBox text={'Acesse nossas redes:'} />
            <ul>
                {
                    socialMedias.map(item => <SocialMedia key={item.iconClass} imge={item.icone} socialMediaIcon={item.iconClass} link={item.url} />)
                }
            </ul>
        </footer>
    )
}

export default Footer;