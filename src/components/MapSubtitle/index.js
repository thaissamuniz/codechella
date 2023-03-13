import './style.css';

const MapSubtitle = ({ sec, bgColor }) => {
    return (
        <div className='map__subtitle'>
            <div className='colors__subtitle' style={{ backgroundColor: bgColor }}></div>
            <p>{sec}</p>
        </div>
    )
}

export default MapSubtitle;