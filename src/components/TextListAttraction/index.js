import './style.css';

const TextListAttraction = ({ text, textSize, fontW }) => {
    return (
        <p style={{ fontSize: textSize, fontWeight:fontW }} className='textListAttraction'>{text}</p>
    )
}

export default TextListAttraction;