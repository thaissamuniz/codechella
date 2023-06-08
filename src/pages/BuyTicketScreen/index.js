import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import './style.css';
import Banner from '../../components/Banner';
import bnImage from '../../img/Banner - Garanta seu ingresso.png';
import bnDesk from '../../img/BannerBuyTicketDesk.png';
import Text from '../../components/Text';


const inputData = {
    value: "",
    errorMessage: ""
}

const InputForm = ({ label, inputData, type, onChange, validateFun }) => {
    let className = '';

    if (inputData.errorMessage) {
        className = " input-invalid"
    }

    

    return <div className={"buy__ticket--cont" + className} >
        <label className='buy__ticket--lb'>
            {label}
            <input className='buy__ticket--input' type={type} value={inputData.value} onChange={onChange} />
        </label>
        <span className='error-message'>{inputData.errorMessage}</span>
    </div>
}


const BuyTicketScreen = () => {
    const [nome, setNome] = useState({...inputData});
    const [email, setEmail] = useState({...inputData});
    const [birthday, setBirthday] = useState({...inputData});
    const [ticket, setTicket] = useState('');
    const navigate = useNavigate();

    const getUserAge = () => {
        let yearOfBirth = new Date(birthday.value).getFullYear();
        let currentYear = new Date().getFullYear();
        let age = currentYear - yearOfBirth;
        return age;
    }

    function saveData() {
        localStorage.setItem('name', nome);
        localStorage.setItem('ticket', `Ingresso ${ticket}`);
    }

    const validaNome = () => {
        if (nome.value.split(" ").filter(e => e).length < 2) {
            console.log('nome e sobrenome são obrigatorios')
            setNome({ ...nome, errorMessage: "Nome e Sobrenome são obrigatórios" })
            return
        }
        setNome({ ...nome })
        return true
    }

    const validaEmail = () => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            console.log('Email inválido')
            setEmail({ ...email, errorMessage: "Email inválido" })
            return
        }
        setEmail({ ...email })
        return true
    }

    const validaBirthday = () => {
        if (!birthday.value) {
            setBirthday({ ...birthday, errorMessage: "Campo obrigatório" })
            return
        }
        if (!getUserAge() < 16) {
            const errorMessage = 'entrada permitida apenas para maiores de 16 anos.'
            console.log(errorMessage);
            setBirthday({ ...birthday, errorMessage })
            return
        }
        setBirthday({ ...birthday })
        return true
    }

    const validateForm = () => {
        if(validaNome()) {
            return true
        }
        
        if(validaEmail()) {
            return true
        }

        if(validaBirthday()) {
            return true
        }

        if (ticket === '') {
            console.log('selecione o tipo do ingresso');
            return false
        }

        return true
    }


    const onSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        saveData();
        navigate('/ingresso')
    }

    const onChangeName = (e) => {
        setNome({ ...nome, value: e.target.value })
    }

    const onChangeEmail = (e) => {
        setEmail({ ...email, value: e.target.value })
    }

    const onChangeBirthday = (e) => {
        setBirthday({ ...birthday, value: e.target.value })
    }

    return (
        <section className='buy__ticket'>
            <Banner bannerImage={bnImage} bannerImageDesk={bnDesk} />
            <div className='buy__ticket--content'>
                <Text font={"'Calistoga', sans-serif"} textSize={'32px'} text={'Preencha o formulário a seguir:'} />
                <form onSubmit={onSubmit}>
                    <InputForm
                        label="Nome"
                        type="text"
                        onChange={onChangeName}
                        inputData={nome}
                    />
                    <InputForm
                        label="Email"
                        type="email"
                        onChange={onChangeEmail}
                        inputData={email}
                    />
                    <div className="buy__ticket--cont">
                        <label className='buy__ticket--slc'>Tipo de ingresso</label>
                        <select className='buy__ticket--opt' onChange={(e) => setTicket(e.target.value)}>
                            <option label="Padrão">padrão</option>
                            <option label="Cortesia" >cortesia</option>
                            <option label="Premium">premium</option>
                        </select>
                    </div>
                    <InputForm
                        label="Data de Nascimento"
                        type="date"
                        onChange={onChangeBirthday}
                        inputData={birthday}
                    />
                    <button className='buy__ticket--btn'>Avançar!</button>
                </form>
            </div>
        </section>
    )
}

export default BuyTicketScreen;