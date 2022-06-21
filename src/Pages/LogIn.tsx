import { useState }       from "react";
import './HomePage.css';
import anukarna           from '../Images/logo_s.png';
import { Link, Redirect } from "react-router-dom";
import Swal               from "sweetalert2";

const LogIn = () => {

    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const [pending, setPending] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleClear = () => {
        setMobileNumber('');
        setPassword('');
    };

    const handleLogIn = (e: any) => {
        e.preventDefault();
        const data = { mobileNumber, password };

        setPending(true);
        const axios = require('axios');

        axios({
            method: 'post',
            url: 'http://localhost:4000/api/user/login',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data)
        })
            .then(function (response: any) {
                setPending(false);
                Swal.fire({
                    title: 'Successfully logged in.',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#e87a04'
                });
                const loginData = response.data;
                localStorage.setItem("auth-token", loginData[0]);
                localStorage.setItem("name", loginData[1]);
                // axios.defaults.headers.common['Authorization'] = token;
                setRedirect(true);

            })
            .catch(function (error: any) {
                setPending(false);
                Swal.fire({
                    title: 'Error!',
                    text: error.response.data,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#e87a04'
                  })
            });
        
        handleClear();
    };

    if (redirect) { return <Redirect to='/' /> };

    return (
        <div className="logIn">
            <Link to='/'>
                <div className='logo' >
                    <img src={anukarna} height={40} width={54} alt="AK" />
                    <h1 className="logo-name">anukarna foods</h1>
                </div>
            </Link>
            <div className="loginCont">
                <h2>Log In</h2>
                <form onSubmit={handleLogIn}>

                    <label htmlFor="">Mobile Number: </label>
                    <input type="text" required value={mobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }} />
                    <label>Password: </label>
                    <input type="password" required value={password} autoComplete="on" onChange={(e) => { setPassword(e.target.value) }} />

                    {!pending && <button>Log In</button>}
                    {pending && <button>Logging In!</button>}

                </form>

                <p className="redirect">Don't have an account? <Link to='/signup' id='login-redirect'>Click here to SignUp.</Link></p>
            </div>

        </div>
    );
};

export default LogIn;