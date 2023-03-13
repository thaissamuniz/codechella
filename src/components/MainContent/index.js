import AttractionList from '../AttractionList';
import DateStripe from '../DateStripe';
import MainButton from '../MainButton';
import RoundedImg from '../RoundedImg';
import Text from '../Text'
import TextBox from '../TextBox';
import './style.css';
import hpimage from '../../img/Homepage1.png'

const MainContent = () => {
    return (
        <main className='main__content'>
            <RoundedImg roundedImg={hpimage}/>
            <Text font={'"Raleway", sans-serif'} textSize={'32px'} text={'<11 e 12 de Março> Aluródromo de São Paulo'} />
            <TextBox text={'Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!'} />
            <MainButton />
            <Text font={'"Calistoga", serif'} textSize={'48px'} text={'/Line-Up/'} />
            <DateStripe textContent={'SÁBADO <11/03>'} />
            <AttractionList />
            <DateStripe textContent={'DOMINGO <12/03>'} />
            <AttractionList />
        </main>
    )
}

export default MainContent