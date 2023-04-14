import AttractionList from '../AttractionList';
import DateStripe from '../DateStripe';
import MainButton from '../MainButton';
import RoundedImg from '../RoundedImg';
import Text from '../Text'
import TextBox from '../TextBox';
import Banner from '../Banner';
import './style.css';
import hpimage from '../../img/Homepage1.png';
import bnImage from '../../img/Banner - Homepage.svg';
import ImageDn from '../ImageDn';
import bnImageDesk from '../../img/BannerHomeDesk.png';
import hpImageTablet from '../../img/Hm-tablet.png';

const MainContent = () => {
    const x = window.screen.width;
    // console.log(x)
    return (
        <main className='main__content'>
            <Banner bannerImage={bnImage} bannerImageDesk={bnImageDesk} />
            <div className='main__content--box'>
                <div className='main__info'>
                    <RoundedImg roundedImg={hpimage} roundedImgBigger={hpImageTablet} />
                    <div className='main__info--textbox'>
                        <Text font={'"Raleway", sans-serif'} textSize={'32px'} text={'<11 e 12 de Março> Aluródromo de São Paulo'} />
                        <TextBox text={'Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!'} />
                        <MainButton textContent={'Comprar Ingresso!'} />
                    </div>
                </div>
                {
                    x === 360 &&
                    <Text font={'"Calistoga", serif'} textSize={'48px'} text={'/Line-Up/'} />
                }
                {
                    x === 768 &&
                    <Text font={'"Calistoga", serif'} textSize={'64px'} text={'/Line-Up/'} />
                }
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