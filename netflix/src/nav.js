import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [navBar, changenavBar] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY>100){
                changenavBar(true);
            }
            else changenavBar(false);
        });
    })
    return (
        <div className={`nav ${navBar && "nav_black"}`}>
            <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt='Netflix Logo'/> 

            <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='Avatar Logo'/> 
            
        </div>
        
    );
}

export default Nav;
