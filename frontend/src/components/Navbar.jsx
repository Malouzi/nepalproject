import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

import './Navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <img src="/path/to/logo.png" alt="Logo" className="logo" />
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={isOpen ? "open" : ""}>
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
