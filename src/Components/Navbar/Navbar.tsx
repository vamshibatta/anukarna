import { Link } from 'react-router-dom';
import anukarna from '../../Images/logo_s-1.png';
import Categories from './Categories/Categories';
import './Navbar.css';
import Searchbar from './Searchbar/Searchbar';
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai';
import { SiGnuprivacyguard } from 'react-icons/si';

const Navbar = () => {

    const click = () => {
        alert("you clicked");
    }

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
                    <div className="cart">
                        <AiOutlineShoppingCart/>
                        <p onClick={click}>Cart</p>
                    </div>
                    <div className="login">
                        <AiOutlineLogin />
                        <p onClick={click}>Login</p>
                    </div>
                    <div className="signup">
                        <SiGnuprivacyguard />
                        <p onClick={click}>Signup</p>
                    </div>
                </div>
            </nav>
            <div className="cat">
                {/* <Categories /> */}
            </div>
        </div>
    );


}

export default Navbar;