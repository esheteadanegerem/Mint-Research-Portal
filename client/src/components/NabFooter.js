import React from 'react';
import '../assets/css/Navfooter.css';
import logo from '../assets/images/logo.png';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import WriteUsMessage from './WriteUsMessage';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import {Link} from 'react-router-dom'
// import Link from 'cdbreact/dist/components/Link';

const NabFooter = () => {
  return (
    <footer  className="shadow" id='footer'>
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a to="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="100px" className='rounded-circle'/>
              <span className="ms-3 h5 font-weight-bold">MinT</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            Bring us your new Ideas and Create new to this world. And we are perfect to help you.
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
         Quick links
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <Link to="/">Resources</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Annoouncement</Link>
              <Link to="/">National Call</Link>
              <Link to="/">Accepted Projects</Link>
              <Link to="/">News</Link>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Write Us message
           <WriteUsMessage/>
            </p>
           
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
             Contact us
             
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <Link to="/">  <div>
        <FaPhone /> 058- 456-7890
      </div></Link>
              <Link to="/"> <div>
        <FaEnvelope />  example@example.com
      </div></Link>
              <Link to="/"> <div>
        <FaLinkedin /> linkedin.com/in/yourprofile
      </div></Link>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" justifyContent="center" alignItems="center" style={{ width: '100%' }} className="mx-auto mt-4">
          <small className="text-center" style={{ width: '50%' }}>
            &copy; MinT, 2023. All rights reserved.
          </small>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </footer>
  );
};

export default NabFooter;

