import './style.css'
import Text from '../Text'

const DateStripe = () => {
    return (
        <div className='date__stripe'>
            <Text font={"'Calistoga', cursive"} textWidth={'32px'} text={'SÁBADO <11/03>'}/>
        </div>
    )
}

export default DateStripe;