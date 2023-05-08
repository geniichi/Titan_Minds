import './Login.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';


const Login = ({ setUserEmail }) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            setUserEmail(userCredential.user.email);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const goToHome = () => {
        window.location.href = '/'
    }
    return (
        <main id="login-container">
            <div className='
                container
                col-xl-4 p-xl-5
                col-lg-5 p-lg-3
                col-md-6 p-md-5
                col-sm-7 p-sm-4
                col-10 px-4 py-3'
            >
                <h1 id="LogIn-title" className='text-center pb-4'>Log In</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                        />
                        <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-light my-3">Log In</button>
                </form>
                <div>
                    <p>Don't have an account yet? <Link to="/signUp" className='link'> Click Here</Link></p>
                </div>
            </div>
        </main>
    )
}

export default Login;
