import './Header.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = ({ userEmail }) => {

    const [userVerify, setUserVerify] = useState(null);

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUserVerify(user)
          } else {
              setUserVerify(null)
          }
          console.log(user);
      });

      return () => {
          listen();
      }

  }, []);

  const userSignOut = () => {
      signOut(auth)
      .then(() => {
          console.log('Sign out successful')
      }).catch(error => console.log(error))
  }

    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navBar-main">
        <a className="navbar-brand" href="#">TitanMinds</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/" className="link">Homepage</Link> &nbsp;
            </li>
            <li className="nav-item">
                <Link to="/shop" className="link nav-item dropdown">Shop</Link> &nbsp;
            </li>
            <li className="nav-item">
                <Link to="/contact" className="link">Contact Us</Link> &nbsp;
            </li>
            <li className="nav-item">
              <Link to="/books" className="link nav-item dropdown pb-5">Books</Link>
            </li>
          </ul>
          {userVerify ? (
              <section id="profile-header-container" className="d-flex align-items-center justify-content-around">
                <div className="d-flex">
                  <p className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">Welcome</p>
                  <h6>{userEmail.slice(0,8)}</h6>
                </div>
                <a href="#" className="d-block link-dark text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <button onClick={userSignOut} className="btn btn-primary">Sign Out</button>
              </section>
            ) : (
              <div className="d-flex justify-content-around" id="authentication-container">
                <Link to="/login" className="btn btn-outline-info my-2 my-sm-0 shadow-none">Login</Link>
                <Link to="/signUp" className="btn btn-outline-light my-2 my-sm-0 shadow-none">Sign Up</Link>
              </div>
            )
          }
        </div>
      </nav>
    )
};

export default Header;
