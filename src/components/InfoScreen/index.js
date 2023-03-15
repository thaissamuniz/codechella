import './style.css';
import Banner from '../Banner';
import bnImage from '../../img/Banner - Infos gerais.png';
import Text from '../Text';
import InfoAccordion from '../InfoAccordion';

const InfoScreen = () => {
    return (
        <section className='info__screen'>
            <Banner bannerImage={bnImage} />
            <div className='info'>
                <Text font={'Calistoga'} textSize={'32px'} text={'Perguntas Frequentes:'} />
                <div>
                    <InfoAccordion infoTitle={'Quais serão as atrações?'} infoText={'Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!'} />
                </div>
            </div>
        </section>
    )
}

export default InfoScreen;