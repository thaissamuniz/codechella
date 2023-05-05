import './style.css';
import Banner from '../../components/Banner';
import bnImage from '../../img/Banner - Garanta seu ingresso.png';
import Text from '../../components/Text';
import DataInput from '../../components/DataInput';
import MainButton from '../../components/MainButton';
const BuyTicketScreen = () => {
    return (
        <section className='buy__ticket'>
            <Banner bannerImage={bnImage} />
            <div className='buy__ticket--content'>
                <Text font={"'Calistoga', sans-serif"} textSize={'32px'} text={'Preencha o formulário a seguir:'} />
                <form>
                    <DataInput lb={'Nome Completo:'} tp={'text'} />
                    <DataInput lb={'Email:'} tp={'email'} />
                    <label className='buy__ticket--slc'>Tipo de ingresso</label>
                    <select className='buy__ticket--opt'>
                        <option>Tipo de Ingresso</option>
                        <option>Cortesia</option>
                        <option>Premium</option>
                        <option>Padrão</option>
                    </select>
                    <DataInput lb={'Data de Nascimento:'} tp={'date'} />
                    <MainButton textContent={'Avançar!'}/>
                </form>
            </div>
        </section>
    )
}

export default BuyTicketScreen;