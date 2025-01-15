import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './comp/Navbar';
import Hero from './comp/Hero';
import Howitworks from './comp/Howitworks';
import Featuredskills from './comp/Featuredskills';
import Testimonials from './comp/Testimonials';
import Footer from './comp/Footer';
import Profile from './comp/Profile';
import Homepage from './comp/Homepage';
import Signup from './comp/Signup';
import Skillpaage from './comp/Skillpaage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define the main content as the default route */}
        <Route path="/" element={<Homepage/>} />
        
        {/* Profile route */}
        <Route path="/profile" element={<Profile />} />
        {/* route to signup */}
        <Route path="/signup" element={<Signup/>} />
         {/* route to Skillpage */}
         <Route path="/skills" element={<Skillpaage/>} />
      </Routes>
    </Router>
  );
}

export default App;