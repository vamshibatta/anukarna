import { Link } from 'react-router-dom';
import anukarna from '../../Images/logo_s-1.png';
import './Navbar.css';
import Searchbar from './Searchbar/Searchbar';
import { AiOutlineLogin } from 'react-icons/ai';
import { SiGnuprivacyguard } from 'react-icons/si';
import { Dropdown, List } from 'antd-mobile'
import { ArrowDownCircleOutline, DownOutline } from 'antd-mobile-icons'


const Navbar = () => {

    return (
        <div className="two-bars">
            <nav className="NavbarItems">
                <div>
                    <Link to="/">
                        <div className='navbar-logo'>
                            <img src={anukarna} height={40} width={54} alt="AK" />
                            <>Anukarna Foods</>
                        </div>
                    </Link>
                </div>
                {/* <Searchbar /> */}
                {/* <div className='nav-components'>
                    <div>
                        <Link to="/signup">
                            <div className="signup">
                                <SiGnuprivacyguard />
                                <>Signup</>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/login">
                            <div className="login">
                                <AiOutlineLogin />
                                <>Login</>
                            </div>
                        </Link>
                    </div> 
                </div> */}
                <Dropdown className='menu-dropdown'>
                    <Dropdown.Item key='sorter' title={<p style={{fontSize:'20px',margin:'0px'}}>Menu</p>}>
                        <List header='Menu'>
                            <List.Item prefix={<SiGnuprivacyguard />}>
                            <Link to="/signup">Signup</Link>
                            </List.Item>
                            <List.Item prefix={<AiOutlineLogin />}>
                            <Link to="/login">Login</Link>
                            </List.Item>
                        </List>
                    </Dropdown.Item>
                </Dropdown>
                
            </nav>
        </div>
    );


}

export default Navbar;