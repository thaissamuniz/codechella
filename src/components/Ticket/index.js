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
            <div className='ticket__qr'>
                <img src={qrCode} alt='' />
            </div>
            <div>
                <h5 className='ticket__name'>Nome</h5>
                <p>Tipo de Ingresso</p>
                <p>setor</p>
                <p>data</p>
                <p>local</p>
            </div>
        </section>
    )
}

export default Ticket;