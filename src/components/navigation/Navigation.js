import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div>
            <ul className='navigation'>
                <li>
                    <button><Link to="/Speisekarte">Speisekarte</Link></button>
                </li>
                <li>
                    <button><Link to="/Kontakt">Kontakt</Link></button>
                </li>
                <li>
                    <button><Link to="/Öffnungezieten">Öffnungszeiten</Link></button>
                </li>
                <li>
                    <button><Link to="/Galerie">Galerie</Link></button>
                </li>
            </ul>
        </div>
    )
}


export default Navigation;