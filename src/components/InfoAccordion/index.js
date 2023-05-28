import { useState } from 'react';
import './style.css';

const InfoAccordion = ({ infoTitle, infoText }) => {
    const [active, setActive] = useState(false);
    
    const handleOpen = () => setActive(!active)
    const className = (active ? '--active' : '')
    
    return (
        <div className='info__accordion'>
            <div className='info__header' onClick={handleOpen}>
                <h3>{infoTitle}</h3>
            </div>

            <div className={'info__content info__content' + className} >
                <p>{infoText}</p>
            </div>

        </div>
    )
}

export default InfoAccordion;