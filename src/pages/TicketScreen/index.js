import './style.css'
import Banner from '../../components/Banner';
import bnImage from '../../img/Banner -ingresso.png';
import bnImageDesk from '../../img/BannerTicketDesk.png'
import Text from '../../components/Text';
import Ticket from '../../components/Ticket';

const TicketScreen = () => {
    return (
        <section className='ticket__screen'>
            <Banner bannerImage={bnImage} bannerImageDesk={bnImageDesk} />
            <div className='ticket__screen--content'>
                <h2 className='ticket__screen--txt'> Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
                <Ticket />
            </div>

        </section>
    )
}

export default TicketScreen;