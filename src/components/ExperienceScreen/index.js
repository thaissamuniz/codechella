import './style.css';
import Banner from "../Banner"
import bannerImg from '../../img/Banner - A Experiência (1).png';
import experienceBannerDesk from '../../img/BannerExperienceDesk.png';
import experienceOne from '../../img/A experiência1.png';
import experienceTwo from '../../img/A experiência2.png';
import experienceThree from '../../img/A experiência3.png';

import experienceOneTd from '../../img/experience-td1.png';
import experienceTwoTd from '../../img/experience-td2.png';
import experienceThreeTd from '../../img/experience-td3.png';

import InfoCard from '../InfoCard';

const ExperienceScreen = () => {
    return (
        <section className="experienceContent">
            <div className='bn'>
                <Banner bannerImage={bannerImg} bannerImageDesk={experienceBannerDesk}/>
            </div>
            <div className='eCont'>
                <InfoCard cardImgMb={experienceOne} cardImgTdk={experienceOneTd} cardTitle={'Acessibilidade e Inclusão'} cardText={'Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!'} />
                <InfoCard cardImgMb={experienceTwo} cardImgTdk={experienceTwoTd} cardTitle={'Sustentabilidade'} cardText={'Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.'} />
                <InfoCard cardImgMb={experienceThree} cardImgTdk={experienceThreeTd} cardTitle={'Atrações'} cardText={'Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!'} />
            </div>
        </section>

    )
}

export default ExperienceScreen