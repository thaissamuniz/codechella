const RoundedImg = ({ roundedImg, roundedImgBigger }) => {
    const screenSize = window.screen.width
    if (screenSize < 768) {
        return <img src={roundedImg} alt='bandas' />
    }
    return <img src={roundedImgBigger} alt='bandas' />
}

export default RoundedImg