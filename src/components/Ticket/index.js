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
                    <h5 className='ticket__name ticket__info'>Nome</h5>
                    <p className='ticket__info'>Tipo de Ingresso</p>
                    <p className='ticket__info'>setor</p>
                    <p className='ticket__info'>data</p>
                    <p className='ticket__info'>local</p>
                </div>
            </div>
        </section>
    )
}

export default Ticket;