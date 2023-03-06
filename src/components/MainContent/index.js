import DateStripe from '../DateStripe';
import MainButton from '../MainButton';
import RoundedImg from '../RoundedImg';
import Text from '../Text'
import TextBox from '../TextBox';
import './style.css';

const MainContent = () => {
    return (
        <main className='main__content'>
            <RoundedImg />
            <Text font={'"Raleway", sans-serif'} textSize={'32px'} text={'<11 e 12 de Março> Aluródromo de São Paulo'} />
            <TextBox text={'Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!'} />
            <MainButton />
            <Text font={'"Calistoga", serif'} textSize={'48px'} text={'/Line-Up/'} />
            <DateStripe />
        </main>
    )
}

export default MainContent