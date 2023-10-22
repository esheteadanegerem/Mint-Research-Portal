import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="logo.png" alt="Avatar Logo" className="rounded-pill" />
          </a>
        </div>
        <div className="mr-2">
          <Link to="/">Home</Link>
        </div>
        <div className="mr-2">
          <Link to="/about">About</Link>
        </div>
        <div className="mr-2">
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Home;
