import './style.css';
import ticketLogo from '../../img/Logo1 3.svg';
import ticketLogo2 from '../../img/Ellipse 4.png';
import qrCode from '../../img/Qr code 1.png';
const Ticket = () => {
    return (
        <section className='ticket'>
            <div className='ticket__header'>
                <img src={ticketLogo} alt='' />
                <img src={ticketLogo2} alt='' />
            </div>
            <div className='ticket__content'>

                <div className='ticket__qr'>
                    <img src={qrCode} alt='' />
                </div>
                <div>
                    <h5 className='ticket__name ticket__info'>{localStorage.getItem('name')}</h5>
                    <p className='ticket__info'>{localStorage.getItem('ticket')}</p>
                    <p className='ticket__info'>Pista Premium</p>
                    <p className='ticket__info'>13/05</p>
                    <p className='ticket__info'>São Paulo - SP</p>
                </div>
            </div>
        </section>
    )
}

export default Ticket;