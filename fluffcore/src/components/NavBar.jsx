// Navbar.jsx - Updated
import { useState } from 'react';
import "./Navbar.css";
import SliderMenu from './SliderMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button 
                className="menu-btn" 
                onClick={toggleMenu}
                style={{ zIndex: isOpen ? 997 : 'auto' }}
            >
               <div className='Micon'></div>
            </button>
            
            <SliderMenu isOpen={isOpen} onClose={closeMenu} />
        </>
    );
};

export default Navbar;