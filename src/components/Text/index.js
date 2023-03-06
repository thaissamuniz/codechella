import './style.css'

const TextRaleway = ({ font, textSize, text }) => {
    return (
        <h2 className="text" style={{ fontFamily: font, fontSize: textSize }}>{text}</h2>
    )
}

export default TextRaleway