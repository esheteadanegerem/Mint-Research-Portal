import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbarr from '../components/Navbarr';
import invent from '../assets/images/invent.jpeg'
import potentail1 from '../assets/images/potentail1.jpeg'
import potential2 from '../assets/images/potential2.jpg'
import '../assets/css/Home.css'
import NabFooter from '../components/NabFooter';
const Home = () => {
  return (
    <div className="container-fluid">
      <Navbarr />
      <div className='row'>
        <div className='col'>
          <h1>OUR MISSION AND VISION IS TO CREATE NEW THINGS TO THIS COUNTRY AND THIS WORLD!</h1>
          <Nav>
            <div className='row'>
              <div className='col'>
              <Nav.Link className='btn  ' as={Link} to='/about' id='aboutus'>About Us</Nav.Link>
              </div>
              <div className='col'><Nav.Link className='btn bg-gold' as={Link} to='/calls' id='calls'>See  new calls</Nav.Link></div>
            </div>
            
            
          </Nav>
        </div>
        <div className='col  ' id='imag'>
        <img src={invent} alt='innovations' id='imag'></img>
        </div>
      </div>
      <div>
        <h1>discover potential resouces</h1>
       
        <img src={potential2} id='imag'/>
        <img src={potentail1} id='imag'/>
      </div>
<NabFooter/>
    </div>
  );
};

export default Home;
