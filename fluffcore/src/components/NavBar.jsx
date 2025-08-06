import { useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
               <div className='Micon'>
               
               </div>
            </button>
        </>
    );
};

export default Navbar;
