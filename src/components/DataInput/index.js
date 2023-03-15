import './style.css';
const DataInput = ({ lb, tp }) => {
    return (
        <div className='data__input--d'>
            <label className='data__input--lb'>
                {lb}
                <input type={tp} className='data__input' />
            </label>
        </div>
    )
}

export default DataInput;