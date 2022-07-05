
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import AdminProfile from './components/AdminProfile'
import Test from './components/Test'
import { useState,createContext } from 'react'
import Footer from "./components/Footer"






function App() {

  let [userLoginStatus, setUserLoginStatus] = useState('');


  const logOutUser = () => {
    localStorage.clear();
    setUserLoginStatus(false)
  }

  return (
    <div>
    <BrowserRouter>
      <>
        <nav style={{backgroundColor: "black"}} className="navbar fixed-top navbar-expand-sm navbar-light">
        <div class="container-fluid">
        <a href="#" className="navbar-brand">
            <img src="https://ouch-cdn2.icons8.com/HDe_jyXfY6TlqRV9y_DcjXL6FwkolhuyA3zSBLQIZLY/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjc2/L2Q4MjI2OGMwLTBl/ZWUtNDEwYi1iY2Vj/LTZmZjQzOWVkNGEw/My5wbmc.png" height="55"alt="CoolBrand"/>
        </a> 
        <div className='text-center ps-3 pt-2'>
        <h4 className='nav-item text-light'><i>Signature Cuisine</i></h4>
        </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nv" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


          <div class="collapse navbar-collapse" id="nv">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-light" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Register</Link>
              </li>

              <li className="nav-item">
                <Link to="/test" className="nav-link text-light" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About Us</Link>
              </li>

              {
                !userLoginStatus ?
                  <li className="nav-item">
                    <Link to="/login" className="nav-link text-white" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Login</Link>
                  </li> :

                  <li className="nav-item">
                    <Link to="/login" className="nav-link text-white" onClick={() => logOutUser()} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Logout</Link>
                  </li>
              }

            </ul>
          </div>
          
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
       
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login setUserLoginStatus={setUserLoginStatus} />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/userprofile/:username">
            <UserProfile />
          </Route>

          <Route path="/adminprofile/:username">
            <AdminProfile />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
    <div className="footer mt-5">
    <Footer />
  </div>
  </div>
  );

}

export default App;
