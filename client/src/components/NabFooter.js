import React from 'react';
import '../assets/css/Navfooter.css';
import logo from '../assets/images/logo.png';

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
              <img alt="logo" src={logo} width="50px" />
              <span className="ms-3 h5 font-weight-bold">MinT</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              We are creating High-Quality Resources and tools to aid developers during the development of their projects.
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            MinT
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <Link to="/">Resources</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Blog</Link>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <Link href="/">Support</Link>
              <Link href="/">Sign Up</Link>
              <Link href="/">Sign In</Link>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <Link to="/">Windframe</Link>
              <Link to="/">Loop</Link>
              <Link to="/">Contrast</Link>
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

