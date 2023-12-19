import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header>
                <div className="navbar1">
                    <ul className="links1">

                        <img alt=' ' src="./media/1.png" />
                        <li><Link to="/collection">Product</Link></li>
                        <li><Link to="/cart">Solutions</Link></li>
                        <li><Link to="/search">Marketplace</Link></li>
                        <li><Link to="/homee">Pricing</Link></li>
                        <li><Link to="/home">Compare</Link></li>
                        <li><Link to="/addproduct">Affiliates</Link></li>

                    </ul>
                    <button className='signupbtn'>
                        <h1>Signup</h1>
                    </button>
                    <div className="toggle_btn1" onClick={toggleDropdown}>
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                    </div>
                </div>
                <div className='maindropdown1'>
                    <img alt=' ' src="./media/1.png" />
                    <div className={`dropdown_menu1 ${isOpen ? 'open' : ''}`}>
                    
                        <ul className="links1">
                            <li><Link to="/collection">Product</Link></li>
                            <li><Link to="/cart">Solutions</Link></li>
                            <li><Link to="/search">Marketplace</Link></li>
                            <li><Link to="/homee">Pricing</Link></li>
                            <li><Link to="/home">Compare</Link></li>
                            <li><Link to="/addproduct">Affiliates</Link></li>
                            <li> <button className='signupbtn1'>
                                <h1>Signup</h1>
                            </button></li>
                        </ul>

                    </div>
                </div>
            </header>
        </div>
    );
}
