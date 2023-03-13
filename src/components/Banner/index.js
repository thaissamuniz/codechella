import './style.css'

const Banner = ({bannerImage}) => {
    return (
        <div className='banner'>
            <img src={bannerImage} alt='' />
        </div>
    )
}

export default Banner