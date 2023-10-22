import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <Link to="/contact" className="nav-link">news</Link>
          </li>
        </ul>
      </div>
      <div className="d-flex row">
        <div className='col'> <Link to="/login" className="nav-link btn bg-secondary">Login</Link></div>
        <div className='col'>    <Link to="/register" className=" btn  nav-link bg-secondary">Register</Link></div>
       
    
      </div>
    </nav>
    </div>
  )
}

export default Navbar