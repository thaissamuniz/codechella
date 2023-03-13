import './style.css';
import Banner from "../Banner"
import bannerImg from '../../img/Banner - A Experiência (1).png'
import experienceOne from '../../img/A experiência1.png';
import experienceTwo from '../../img/A experiência2.png';
import experienceThree from '../../img/A experiência3.png';


import InfoCard from '../InfoCard';

const ExperienceScreen = () => {
    return (
        <section className="experienceContent">
            <div className='bn'>
                <Banner bannerImage={bannerImg} />
            </div>
            <div className='eCont'>
                <InfoCard cardImg={experienceOne} cardTitle={'Acessibilidade e Inclusão'} cardText={'Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!'} />
                <InfoCard cardImg={experienceTwo} cardTitle={'Sustentabilidade'} cardText={'Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.'} />
                <InfoCard cardImg={experienceThree} cardTitle={'Atrações'} cardText={'Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.'} />
            </div>
        </section>

    )
}

export default ExperienceScreen