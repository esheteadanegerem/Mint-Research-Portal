import React from 'react'
import { BrowserRouter as Router, Routes,Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import PostNews from './pages/admin/PostNews'
import SetAppointmentDate from './pages/admin/SetAppointmentDate'
import UpdateUserStatus from './pages/admin/UpdateUserStatus'


function App() {
  return (
  <div >
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin/news/add-news' element={<PostNews/>}/>
        <Route path='/admin/appointments/add-appointment' element={<SetAppointmentDate/>}/>
        <Route path='/admin/user-status/add-user-status' element={<UpdateUserStatus/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
