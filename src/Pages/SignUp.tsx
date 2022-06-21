import { useState }       from "react";
import anukarna           from '../Images/logo_s.png';
import './HomePage.css';
import { Link, Redirect } from "react-router-dom";
import Swal               from "sweetalert2";


const SignUp = () => {

    const [userName, setUserName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [pending, setPending] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleClear = () => {
        setUserName('');
        setMobileNumber('');
        setAddress('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleSignup = (e: any) => {
        e.preventDefault();
        const data = { userName, mobileNumber, address, password, confirmPassword };

        setPending(true);
        const axios = require('axios');

        const config = {
            method: 'post',
            url: 'http://localhost:4000/api/user/signup',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data)
        };

        axios(config)
            .then(function (response: any) {
                setPending(false);
                Swal.fire({
                    title: JSON.stringify(response.data),
                    text: 'Please Log-In to continue',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#e87a04'
                  })
                setRedirect(true);

            })
            .catch(function (error: any) {
                setPending(false);
                Swal.fire({
                    title: 'Error',
                    text: error.response.data,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#e87a04'
                  })
            });

        handleClear();
    };

    if (redirect) { return <Redirect to='/login' /> };

    return (
        <div className="signUp">
            <Link to='/'>
                <div className='logo' >
                    <img src={anukarna} height={40} width={54} alt="AK" />
                    <h1 className="logo-name">anukarna foods</h1>
                </div>
            </Link>
            <div className="signupCont">
                <h2>Create account</h2>
                <form onSubmit={handleSignup}>

                    <label htmlFor="mNumber">Mobile Number: </label>
                    <input type="text" required id="mNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />

                    <label htmlFor="fName">Your Name: </label>
                    <input type="text" required id="fName" value={userName} onChange={(e) => setUserName(e.target.value)} />

                    <label htmlFor="address">Address: </label>
                    <textarea required id="address" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>

                    <label htmlFor="password">Password: </label>
                    <input type="password" required id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <label htmlFor="password">Confirm Password: </label>
                    <input type="password" required id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                    {!pending && <button>Sign Up!</button>}
                    {pending && <button>Signing You Up!</button>}

                </form>

                <p className="redirect">Already have an account? <Link to='/login' id='login-redirect'>Click here to LogIn.</Link></p>
            </div>
        </div>
    );

};

export default SignUp;