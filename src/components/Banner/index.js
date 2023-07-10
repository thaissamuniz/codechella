import './style.css'

const Banner = ({ cn, txt1, txt2 }) => {
    return <div className={`banner ${cn}`}>
        <div className='banner__title'>
            <h1 className='title'>{txt1}</h1>
            <span className='title'>{txt2}</span>
        </div>
    </div>
}

export default Banner