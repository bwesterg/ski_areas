import React, { useState } from 'react';
import '../App.css';

const Menu = () => (

    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#About">About</a></p>
        <p><a href="#How-it-works">How it Works</a></p>
    </>
)

const Navbar = () =>  {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="skiApp__navbar">
            <div className="skiApp__navbar-links">
                {/* <div className="skiApp__navbar-links_logo"></div> */}
                {/* <div className="skiApp__navbar-links_container"> */}
                    <Menu />
                {/* </div> */}
            </div>
        
        </div>
    )
}

export default Navbar;
