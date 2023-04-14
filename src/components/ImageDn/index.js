import './style.css';
import dnImage from '../../img/Homepage2.png';
import dnImageDesk from '../../img/ImagemRodapeDesk.png'

const ImageDn = () => {
    const screenSize = window.screen.width;
    if (screenSize < 768) {
        return <img src={dnImage} className='dn-image' alt='' />
    }
    return <img src={dnImageDesk} className='dn-image' alt='' />
}

export default ImageDn;