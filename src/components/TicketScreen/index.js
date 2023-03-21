import './style.css'
import Banner from '../Banner';
import bnImage from '../../img/Banner -ingresso.png';
import Text from '../Text';
import Ticket from '../Ticket';

const TicketScreen = () => {
    return (
        <section className='ticket__screen'>
            <Banner bannerImage={bnImage} />
            <div className='ticket__screen--content'>
                <div className='ticket__screen--txt'>
                    <Text font={"'Raleway', sans-serif"} textSize={'32px'} text={'Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!'} />
                </div>
                <Ticket />
            </div>

        </section>
    )
}

export default TicketScreen;