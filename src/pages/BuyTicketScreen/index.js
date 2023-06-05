import './style.css';
import Banner from '../../components/Banner';
import bnImage from '../../img/Banner - Garanta seu ingresso.png';
import bnDesk from '../../img/BannerBuyTicketDesk.png';
import Text from '../../components/Text';
import { useState } from 'react';

const BuyTicketScreen = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [ticket, setTicket] = useState('');

    const userAge = () => {
        let yearOfBirth = new Date(birthday).getFullYear();
        let currentYear = new Date().getFullYear();
        let age = currentYear - yearOfBirth;
        return age;
    }

    const validateForm = (e) => {
        e.preventDefault();

        if (nome === '' || !nome.includes(' ')) {
            console.log('nome e sobrenome são obrigatorios')
            return false
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            console.log('email inválido')
            return false
        }

        if (!birthday) {
            console.log('digite a data de nascimento');
        }

        if (userAge() < 16) {
            console.log('entrada permitida apenas para maiores de 16 anos.');
        }

        if (ticket === '') {
            console.log('selecione o tipo do ingresso');
        }

        localStorage.setItem('name', nome)
        localStorage.setItem('ticket', `Ingresso ${ticket}`)

        return true
    }


    return (
        <section className='buy__ticket'>
            <Banner bannerImage={bnImage} bannerImageDesk={bnDesk} />
            <div className='buy__ticket--content'>
                <Text font={"'Calistoga', sans-serif"} textSize={'32px'} text={'Preencha o formulário a seguir:'} />
                <form>
                    <div>
                        <label className='buy__ticket--lb'>
                            Nome Completo
                            <input className='buy__ticket--input' required type='text' value={nome} onChange={(e) => { setNome(e.target.value) }} />
                        </label>
                    </div>
                    <label className='buy__ticket--lb'>
                        Email
                        <input className='buy__ticket--input' required type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className='buy__ticket--slc'>Tipo de ingresso</label>
                    <select className='buy__ticket--opt' onChange={(e) => setTicket(e.target.value)}>
                        <option> </option>
                        <option>Cortesia</option>
                        <option>Premium</option>
                        <option>Padrão</option>
                    </select>
                    <label className='buy__ticket--lb'>Data de Nascimento</label>
                    <input className='buy__ticket--input' type='date' value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                    {/* <MainButton textContent={'Avançar!'} /> */}
                    <button onClick={validateForm} className='buy__ticket--btn'>Avançar!</button>
                </form>
            </div>
        </section>
    )
}

export default BuyTicketScreen;