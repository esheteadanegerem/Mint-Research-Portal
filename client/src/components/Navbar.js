import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{border:' '}}>
      <a className="navbar-brand" href="#"><img src='' alt='mint logo '></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Announcement</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Collaborations</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">About Us</Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">news</Link>
          </li>
        </ul>
      </div>
      <div className="d-flex row">
      <div className='col'>
      <Link to="/login" className="nav-link btn "style={{ background: '#008080', color:'white'}}>Login</Link>
    </div>
        <div className='col'>    <Link to="/register" className=" btn  nav-link " style={{ background: '#008080',color:'white'}}>Register</Link></div>
       
    
      </div>
    </nav>
   
  )
}

export default Navbar
