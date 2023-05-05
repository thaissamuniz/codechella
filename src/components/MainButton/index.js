import { Link } from 'react-router-dom';
import './style.css';

const MainButton = ({ textContent, to }) => {
    return (
        // <a href='#' className='main__button'>{textContent}</a>
        <Link to={to} end className='main__button'>{textContent}</Link>
        
    )
}

export default MainButton;