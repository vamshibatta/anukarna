import { Link, Redirect } from 'react-router-dom';
import anukarna from '../../Images/logo_s-1.png';
import './Navbar.css';
import Searchbar from './Searchbar/Searchbar';
import { AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai';
import { RiAccountCircleFill } from 'react-icons/ri';
import { useState } from 'react';

const SignedNavbar = () => {

    const [redirect, setRedirect] = useState(false);
    const n:string = localStorage.getItem("name") ?? ""; 

    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("name");
        localStorage.removeItem("totalData");
        setRedirect(true);
        window.location.reload();
    }

    if(redirect===true){ return <Redirect to='/' /> }

    return (
        <div className="two-bars">
            <nav className="NavbarItems">
                <div>
                    <Link to="/">
                        <div className='navbar-logo' >
                            <img src={anukarna} height={40} width={54} alt="AK" />
                            <h1 className="logo-name">anukarna foods</h1>
                        </div>
                    </Link>
                </div>
                <Searchbar />
                <div className='nav-components'>
                    <div>
                        <Link to="/myAccount">
                            <div className="myAccount">
                                <RiAccountCircleFill />
                                <p>{n}</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            <div className="cart">
                                <AiOutlineShoppingCart />
                                <p>Cart</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className="logout" onClick={handleLogout}>
                            <AiOutlineLogout />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    );


}

export default SignedNavbar;