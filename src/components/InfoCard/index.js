import './style.css';
import Text from '../Text';

const InfoCard = ({ cardImg, cardImgBig, cardTitle, cardText, specialClass, specialClassM }) => {
    return (
        <div className={`infocard ${specialClass} ${specialClassM}`}>
            <img src={cardImg} className='card__img--mob' />
            <img src={cardImgBig} className='card__img--desk' />
            <div>
                <Text font={"'Raleway', sans-serif"} textSize={'32px'} text={cardTitle} />
                <p className='infocard__content'>{cardText}</p>
            </div>
        </div>
    )
}

export default InfoCard;