import React from 'react'


import { Link } from 'react-router-dom';

import { useEffect,useState,} from 'react';
import { useNavigate } from 'react-router-dom';
const Profilecard = () => {
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
     please Login
<Link to="/Signup" >login first</Link>
    </div>:
    

    <div className="profile-card">
    <div className="profile-card-header">
      <div className="profile-avatar">
        {formData.name.charAt(0).toUpperCase()}
      </div>
      <div style={{display:"grid", gap:"10px"}}>
      <h2 style={{display:"inline-block"}}>{formData.name}</h2>
      <p>{formData.role}</p>
      </div>
      
    </div>
    <div className="profile-card-body">
      <p><strong>Email:</strong> {formData.email}</p>
      <button className=''  onClick={handleLogout} >Logout</button>
    </div>
  </div>}
</>

   
  )
}

export default Profilecard
