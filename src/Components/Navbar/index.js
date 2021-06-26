import './Navbar.css';
import logo from '../../Images/logo.png';
import Select from 'react-select';
import { useState } from 'react';
import { FaSearch,FaShoppingCart,FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
    const [selectedOption,setSeletedOption] = useState({ value: 'all categories', label: 'All Categories' });
    const [selectedNav,setSelectedNav] = useState('Home');
    const options = [
        { value: 'all categories', label: 'All Categories' },
        { value: 'sweets', label: 'Sweets' },
        { value: 'snacks', label: 'Snacks' },
        { value: 'others', label: 'Others' },
      ];
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: 'black',
            backgroundColor: state.isSelected ? 'lightblue' : 'white',
        }),
        control: () => ({
            display:'flex',
            backgroundColor: 'white',
            borderRadius: '10px 0px 0px 10px',
            paddingRight: '4px'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }
    const handleChange = (selectedOption) => {
        setSeletedOption(selectedOption, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    };
  return (
    <div className="nav-bar">

            <div className="top-bar">
                <div className="container">
                    <ul className='top-bar-list'>
                        <li className='top-bar-item'>Wish List</li>                    
                        <li className='top-bar-item'>My Account</li>
                        <li className='top-bar-item'>Sign in</li>
                    </ul>
                </div>
            </div>

            <div className='mid-bar'>
                <div className="container">
                    <div className='mid-bar-main'>
                        <div className='logo-div'>
                            <img src={logo} className='logo' alt='logo'/>
                        </div>
                        <div className='search'>
                            <Select
                                className='drop-down'
                                value={selectedOption}
                                onChange={handleChange}
                                options={options}
                                styles={customStyles}
                            />
                            <input
                                className='drop-down-input'
                            />
                            <button className='search-btn'><FaSearch/> <span style={{marginLeft:'4px'}}>Search</span></button>
                        </div>
                        <div className='my-cart'>
                            <div className='my-cart-details'>
                                <p className='my-cart-title'>Shopping</p>
                                <p className='my-cart-sub-title'>View Cart</p> 
                            </div>
                            <div className='my-cart-logo'>
                                <FaShoppingCart/> <FaAngleDown/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom-bar'>
                <div className="container">
                    <ul className='bottom-bar-list'>
                        <li 
                            className={`bottom-bar-item ${selectedNav=='Home'?'selected':''}`}
                            onClick={()=>setSelectedNav('Home')}
                        ><Link to='/'>Home</Link></li>                    
                        <li 
                            className={`bottom-bar-item ${selectedNav=='New'?'selected':''}`}
                            onClick={()=>setSelectedNav('New')}
                        ><Link to='/new-products'>New Arrivals</Link></li>
                        <li 
                            className={`bottom-bar-item ${selectedNav=='Sweets'?'selected':''}`}
                            onClick={()=>setSelectedNav('Sweets')}
                        >Sweets</li>
                        <li 
                            className={`bottom-bar-item ${selectedNav=='Snacks'?'selected':''}`}
                            onClick={()=>setSelectedNav('Snacks')}
                        >Snacks</li>
                        <li 
                            className={`bottom-bar-item ${selectedNav=='Food'?'selected':''}`}
                            onClick={()=>setSelectedNav('Food')}
                        >Food Products</li>
                    </ul>
                </div>
            </div>

    </div>
  );
}

export default Navbar;