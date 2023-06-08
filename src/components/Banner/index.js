import './style.css'

const Banner = ({ bannerImage, bannerImageDesk }) => {
    // const screenSize = window.screen.width
    // if (screenSize < 768) {
    //     return <img src={bannerImage} alt='' />
    // }
    return <img className='bnDesk' src={bannerImageDesk} alt='' />
}

export default Banner