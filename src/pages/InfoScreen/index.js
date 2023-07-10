import './style.css';
import Banner from '../../components/Banner';
import Text from '../../components/Text';
import InfoAccordion from '../../components/InfoAccordion';
import faqs from 'info';

const InfoScreen = () => {
    return (
        <section className='info__screen'>
            <Banner cn={'banner__is'} txt1={'Informações Gerais'}/>
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