import './style.css';

const InfoAccordion = ({ infoTitle, infoText }) => {
    return (
        <div>
            <div className='info__header'>
                <h3>{infoTitle}</h3>
            </div>
            <div className='info__content'>
                <p>{infoText}</p>
            </div>
        </div>
    )
}

export default InfoAccordion;