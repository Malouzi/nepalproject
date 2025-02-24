import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Startseite</Link></li>
                <li><Link to="/about">Über uns</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/booking">Buchung</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
