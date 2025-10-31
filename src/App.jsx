import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hospitals from './pages/Hospitals'
import Emergency from './pages/Emergency'
import AboutHospitals from './pages/AboutHospitals'
import HospDoc from './pages/HospDoc'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='mx-0 sm:mx-0'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/hospitals' element={<Hospitals />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/doctors/:Hospital/:speciality' element={<Doctors />}/>
        <Route path='/hospdoc/:hospId' element={<HospDoc />}/>
        <Route path='/doctors/:Hospital' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/emergency' element={<Emergency />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/my-appointments' element={<MyAppointment />}/>
        <Route path='/appointment/:docId' element={<Appointment />}/>
        <Route path='/about-hospitals/:hospId/:hospName' element={<AboutHospitals />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
