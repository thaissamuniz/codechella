import './style.css'
import Banner from '../../components/Banner';
import Ticket from '../../components/Ticket';

const TicketScreen = () => {
    return (
        <section className='ticket__screen'>
            <Banner cn={'banner__ts'} txt1={'Seu ingresso está aqui!'}/>
            <div className='ticket__screen--content'>
                <h2 className='ticket__screen--txt'> Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
                <Ticket />
            </div>

        </section>
    )
}

export default TicketScreen;