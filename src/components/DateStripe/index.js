import './style.css'

const DateStripe = ({textContent}) => {
    return (
        <div className='date__stripe'>
            <h3 className='date__stripe--text'>{textContent}</h3>
        </div>
    )
}

export default DateStripe;