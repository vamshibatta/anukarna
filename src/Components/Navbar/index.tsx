import './Navbar.css';
import logo from '../../Images/logo.png';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [navBarVisibility,setNavBarVisibility] = useState(false);
    const [scrollPos,setScrollPos] = useState(0);
    const handleScroll = () => {
        setScrollPos(window.pageYOffset)
        if((((30*window.innerHeight)/100)-scrollPos)<90){
            setNavBarVisibility(true)
        }else{
            setNavBarVisibility(false)
        }
    };
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
    },[scrollPos])
    return (
        <div className="nav-bar">
            <div className='fixed-nav' style={{visibility:navBarVisibility?'visible':'collapse'}}>
                <p>Fixed nav</p>
            </div>
            <div className='logo-cover'>
                <img id='logo-cover-img' src={logo}></img>
            </div>
            <div className='transparent'></div>
            <div className='sub-nav'>
                <div>
                    <p className='desc'>Freshly home made snacks!!</p>
                    <p className='address'>AS Rao Nagar, near asian radika</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;