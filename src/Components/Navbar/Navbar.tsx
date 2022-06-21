import { Link } from 'react-router-dom';
import anukarna from '../../Images/logo_s-1.png';
import './Navbar.css';
import Searchbar from './Searchbar/Searchbar';
import { AiOutlineLogin } from 'react-icons/ai';
import { SiGnuprivacyguard } from 'react-icons/si';

const Navbar = () => {

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
                        <Link to="/signup">
                            <div className="signup">
                                <SiGnuprivacyguard />
                                <p>Signup</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/login">
                            <div className="login">
                                <AiOutlineLogin />
                                <p>Login</p>
                            </div>
                        </Link>
                    </div>
                </div>
                
            </nav>
        </div>
    );


}

export default Navbar;