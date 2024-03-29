import './style.css';
import mapImage from '../../img/Mapa setores 1.png';
import Banner from '../../components/Banner';
import MapSubtitle from '../../components/MapSubtitle';
import InfoCard from '../../components/InfoCard';
import sectorMapOne from '../../img/Mapa de setores2.png';
import sectorMapTwo from '../../img/Mapa de setores3.png';
import sectorMapThree from '../../img/Mapa de setores4.png';

import sectorMapOneTd from '../../img/sector-td1.png';
import sectorMapTwoTd from '../../img/sector-td2.png';
import sectorMapThreeTd from '../../img/sector-td3.png';


const SectorMap = () => {
    return (
        <section className='sector__maps'>
            <Banner cn={'banner__sm'} txt1={'Mapa de setores'} />
            <div className='sector__map--ms'>
                <img className='map' src={mapImage} alt='' />
                <div className='sector__map--content'>
                    <div className='sector__map--subtitle'>
                        <h3>Legenda:</h3>
                        <MapSubtitle sec={'Pista Premium'} bgColor={'#0E7DF1'} />
                        <MapSubtitle sec={'Pista Comum'} bgColor={'#FE016E'} />
                        <MapSubtitle sec={'Pista Térreo'} bgColor={'#01A89E'} />
                        <MapSubtitle sec={'Pista Superiores'} bgColor={'#3F51B5'} />
                        <MapSubtitle sec={'Rampas'} bgColor={'#0E7DF1'} />
                    </div>
                </div>
            </div>
            <div>
                {/* <Text font={"'Raleway', sans-serif"} textSize={'32px'} text={'Mais detalhes sobre os setores: '} /> */}
                <h2 className='sector__title'>Mais detalhes sobre os setores: </h2>
                <div className='sector__about'>
                    <InfoCard cardImg={sectorMapOne} cardImgBig={sectorMapTwoTd} cardTitle={'Pista'} cardText={'Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.'} />
                    <InfoCard cardImg={sectorMapTwo} cardImgBig={sectorMapThreeTd} cardTitle={'Pista Premium'} cardText={'Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.'} />
                    <InfoCard cardImg={sectorMapThree} cardImgBig={sectorMapOneTd} cardTitle={'Cadeiras'} cardText={'Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.'} />
                </div>
            </div>

        </section>
    )
}

export default SectorMap;