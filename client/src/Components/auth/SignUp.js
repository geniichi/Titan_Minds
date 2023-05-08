import './SignUp.css';
import { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const [PasswordPasses,setPasswordPasses] = useState(false)

  useEffect(() => {
    if (!(password.length < 6)) {
      setPasswordPasses(true)
    } else {
      setPasswordPasses(false)
    }
  }, [password]);


  const handleSignUp = (event) => {
    event.preventDefault();
    if (auth.currentUser) {
      alert('You are already signed in. Please sign out first.');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate("/login")
        })
        .catch((error) => {
            console.log(error);
        })
  }

  return (
    <main id="SignUp-container">
        <form onSubmit={handleSignUp}
          className='
          container
          col-xl-4 py-xl-4 px-xl-5
          col-lg-5 p-lg-3
          col-md-6 p-md-5
          col-sm-7 p-sm-4
          col-10 px-4 py-3'
        >
            <h1 className='text-center pb-4 text-dark'>Sign Up</h1>
            <div className="form-group pt-4">
                <label htmlFor="email"  className='text-dark'>Email address</label>
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name="email" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password" className='text-dark'>Password</label>
                <input type="password" required value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" name="password" placeholder="Password"/>
            </div>
            {PasswordPasses === false? <p className="text-danger">A minimum of 6 characters is needed for the password</p> : <p className="text-success">Password is satisfactory</p>}
            <div>
              <button type="submit" className="btn btn-outline-dark col-4 col-md-4">Sign Up</button>
            </div>
            <div className='mt-3'>
              <p>Already have an account? <Link to="/Login" className='link text-dark'>Here</Link></p>
          </div>
        </form>
    </main>
  )
}

export default SignUp
