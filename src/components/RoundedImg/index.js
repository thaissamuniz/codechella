import './style.css';
const RoundedImg = ({ className, img }) => {
    return (
        <div className={className}>
            <img src={img} />
        </div>
    )
}

export default RoundedImg