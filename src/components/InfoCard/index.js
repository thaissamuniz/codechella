import './style.css';
import RoundedImg from '../RoundedImg';
import Text from '../Text';
// import TextBox from '../TextBox';


function VerifyScreenSize({ cardImgM, cardImgTd }) {
    const screenSize = window.screen.width;

    if (screenSize >= 360 && screenSize < 768) {
        return <RoundedImg roundedImg={cardImgM} />
    } else {
        return <RoundedImg roundedImg={cardImgTd} />
    }
}


const InfoCard = ({ cardImgMb, cardImgTdk, cardTitle, cardText }) => {
    return (
        <div className='infocard'>
            <VerifyScreenSize cardImgM={cardImgMb} cardImgTd={cardImgTdk} />
            <Text font={"'Raleway', sans-serif"} textSize={'32px'} text={cardTitle} />
            {/* <TextBox text={cardText} /> */}
            <p className='infocard__content'>{cardText}</p>
        </div>
    )
}

export default InfoCard;