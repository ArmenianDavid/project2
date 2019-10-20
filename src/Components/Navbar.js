import React from 'react'
import MyLogo from '../img/MyLogo.png';


const Navbar = () =>{
  return(
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a href="#" className="navbar-brand"> <img src={MyLogo} alt='logo'/> </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponse">
           <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"> 
              <a href="#" className="nav-link active"> Menu </a> 
            </li>
            <li className="nav-item"> 
                <a href="#" className="nav-link"> About Us </a> 
              </li>
              <li className="nav-item"> 
                  <a href="#" className="nav-link"> Our Products </a> 
                </li>
                <li className="nav-item"> 
                    <a href="#" className="nav-link"> Call Us </a> 
                  </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar