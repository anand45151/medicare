import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Services from '../pages/Services';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorsDetails from '../pages/Doctors/DoctorsDetails';
import Medicine from '../pages/Medicine';
import Post from '../pages/Post';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/post" element={<Post />} />

      <Route path="/doctors/:id" element={<DoctorsDetails />} 
      
      
      />
    </Routes>
  );
}

export default Routers;
