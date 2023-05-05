import { Link } from 'react-router-dom';
import './style.css';

const MainButton = ({ textContent, to }) => {
    return (
        <Link to={to} className='main__button'>{textContent}</Link>
        
    )
}

export default MainButton;