import './style.css'
import Text from '../Text'

const DateStripe = ({textContent}) => {
    return (
        <div className='date__stripe'>
            <Text font={"'Calistoga', cursive"} textWidth={'32px'} text={textContent}/>
        </div>
    )
}

export default DateStripe;