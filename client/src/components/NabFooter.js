import React from 'react'
import '../assets/css/Navfooter.css'
import logo from '../assets/images/logo.png'
const NabFooter = () => {
  return (
    <footer id='footer'>
      <div className='row'>
        <div className='col'>
          <img src={logo} alt='logo' id='imag'/>
        </div>
        <div className='col'>
          <h4>Send Us message</h4>
          <form>
          <div>  <label className='form-control'>full name:   <input type='text'/></label></div>
          
          <div>  <label className='form-control'>full name:   <input type='text'/></label></div>
          <div>  <label className='form-control'>full name:   <input type='text'/></label></div>
            <button>send </button>
          </form>
        </div>
        <div className='col'>quick links</div>
        <div className='col'> contacts</div>
      </div>
      
    </footer>
  )
}

export default NabFooter
