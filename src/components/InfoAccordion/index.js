import { useState } from 'react';
import './style.css';

const InfoAccordion = ({ infoTitle, infoText }) => {

    const [show, setShow] = useState(false);
    const handleOpen = () => {
        setShow(!show)
    }

    return (
        <div className='info__accordion'>
            <div className='info__header' onClick={handleOpen}>
                <h3>{infoTitle}</h3>
            </div>
            {
                show && (
                    <div className='info__content'>
                        <p>{infoText}</p>
                    </div>
                )
            }

        </div>
    )
}

export default InfoAccordion;