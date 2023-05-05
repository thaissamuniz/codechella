import './style.css';
import Text from '../Text';
// import TextBox from '../TextBox';


function VerifyScreenSize({ cardImgM, cardImgTd }) {
    const screenSize = window.screen.width;

    if (screenSize >= 360 && screenSize < 768) {
        return <img className='infocard__img' src={cardImgM} alt='pessoa feliz' />
    } else {
        return <img className='infocard__img' src={cardImgTd} alt='pessoa feliz' />
    }
}


const InfoCard = ({ cardImgMb, cardImgTdk, cardTitle, cardText }) => {
    return (
        <div className='infocard'>
            <VerifyScreenSize cardImgM={cardImgMb} cardImgTd={cardImgTdk} />
            <div>
            <Text font={"'Raleway', sans-serif"} textSize={'32px'} text={cardTitle} />
            <p className='infocard__content'>{cardText}</p>
            </div>
        </div>
    )
}

export default InfoCard;