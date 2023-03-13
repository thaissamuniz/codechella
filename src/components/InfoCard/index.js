import './style.css';
import RoundedImg from '../RoundedImg';
import Text from '../Text';
import TextBox from '../TextBox';

const InfoCard = ({ cardImg, cardTitle, cardText }) => {
    return (
        <div className='infocard'>
            <RoundedImg roundedImg={cardImg} />
            <Text font={"'Raleway', sans-serif"} textSize={'32px'} text={cardTitle} />
            <TextBox text={cardText} />
        </div>
    )
}

export default InfoCard;