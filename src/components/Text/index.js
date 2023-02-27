import './style.css'

const TextRaleway = ({ font, textWidth, text }) => {
    return (
        <h2 className="text" style={{ fontFamily: font, width: textWidth }}>{text}</h2>
    )
}

export default TextRaleway