import './style.css';
import Banner from '../../components/Banner';
import bnImage from '../../img/Banner - Infos gerais.png';
import bnImageDesk from '../../img/BannerInfoDesk.png';
import Text from '../../components/Text';
import InfoAccordion from '../../components/InfoAccordion';
import faqs from 'info';

const InfoScreen = () => {
    return (
        <section className='info__screen'>
            <Banner bannerImage={bnImage} bannerImageDesk={bnImageDesk} />
            <div className='info'>
                <div className='info__txt'>
                    <Text font={'Calistoga'} textSize={'32px'} text={'Perguntas Frequentes:'} />
                </div>
                <div>
                    {
                        faqs.map(item => <InfoAccordion key={item.question} infoTitle={item.question} infoText={item.answer} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default InfoScreen;