import React from 'react'

import { Link, useLocation } from 'react-router-dom';
import Hero from './Hero';
import { useEffect,useState,} from 'react';
import { useNavigate } from 'react-router-dom';
import Profilecard from './Profilecard';



const Profile = ({home}) => {
  const [formData, setFormData] = useState({ name: '' });
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
      // Retrieve data from local storage
      const storedFormData = JSON.parse(localStorage.getItem('formData'));
      const storedLogin = localStorage.getItem('login') === 'true';
      if (storedFormData && storedLogin) {
          setFormData(storedFormData);
          setLogin(storedLogin);
      }
  }, []);

const handleLogout=()=>{
  console.log("logout button clicked",)
  localStorage.removeItem('formData')
  localStorage.removeItem('login');
    
  // Update state to reflect logout
  setFormData({ name: '' });
  setLogin(false);

  console.log("Updated formData:", formData);

}
  return (
    <>
    {!formData.name?
    //Login link
    <div className=''>
     <Hero/>
<Link to="/Signup" >login first</Link>
    </div>
    :
    <div className=''>
 <h1>Welcome to SkillExchange {formData.name}</h1>
 {
  home ? <div>

  </div> :
 <div>
  <Profilecard/>
 
 </div>
 }

    </div>
    
  }
   
    
  </>
  )
}

export default Profile