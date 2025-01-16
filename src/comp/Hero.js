import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Profile from './Profile';
const Hero = () => {
   const location = useLocation();
   const { formData = { name: '' }, login = false } = location.state || {};
   console.log("profile login:",login)
  console.log(location.state)
  return (
   <>
    {!location.state?
 <section id='hero-1' >
 <div className="hero-content">
   <h1>Unlock Your Potential with SkillExchange</h1>
   <p>Connect with people to learn, grow, and share valuable skills.</p>
   <div className="hero-buttons">
     <Link to="/Signup" className="hero-button">Join Now</Link>
     <Link to="/skills" className="hero-button outline">Browse Skills</Link>
   </div>
 </div>
</section> :
<Profile/>

    }
      
     
    
   </>
  )
}

export default Hero
