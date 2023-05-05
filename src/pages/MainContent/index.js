import AttractionList from '../../components/AttractionList';
import DateStripe from '../../components/DateStripe';
import MainButton from '../../components/MainButton';
import RoundedImg from '../../components/RoundedImg';
import Text from '../../components/Text'
import TextBox from '../../components/TextBox';
import Banner from '../../components/Banner';
import './style.css';
import hpimage from '../../img/Homepage1.png';
import bnImage from '../../img/Banner - Homepage.svg';
import ImageDn from '../../components/ImageDn';
import bnImageDesk from '../../img/BannerHomeDesk.png';
import hpImageTablet from '../../img/Hm-tablet.png';

function DefineTextSize() {
    const screenSize = window.screen.width;
    if (screenSize >= 360 && screenSize < 768) {
        return <Text font={'"Calistoga", serif'} textSize={'48px'} text={'/Line-Up/'} />
    } else if (screenSize >= 768) {
        return <Text font={'"Calistoga", serif'} textSize={'64px'} text={'/Line-Up/'} />
    }
}

const MainContent = () => {
    // const x = window.screen.width;
    // // console.log(x)
    return (
        <main className='main__content'>
            <Banner bannerImage={bnImage} bannerImageDesk={bnImageDesk} />
            <div className='main__content--box'>
                <div className='main__info'>
                    <RoundedImg roundedImg={hpimage} roundedImgBigger={hpImageTablet} />
                    <div className='main__info--textbox'>
                        <Text font={'"Raleway", sans-serif'} textSize={'32px'} text={'<11 e 12 de Março> Aluródromo de São Paulo'} />
                        <TextBox text={'Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!'} />
                        <MainButton to={'/comprar-ingresso'} textContent={'Comprar Ingresso!'} />
                    </div>
                </div>
                <DefineTextSize />
                <DateStripe textContent={'SÁBADO <11/03>'} />
                <AttractionList />
                <DateStripe textContent={'DOMINGO <12/03>'} />
                <AttractionList />
            </div>
            <ImageDn />
        </main>
    )
}

export default MainContent