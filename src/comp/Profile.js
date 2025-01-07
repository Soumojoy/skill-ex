import React from 'react'

import { Link, useLocation } from 'react-router-dom';


const Profile = ({}) => {
  const location = useLocation();
 const { formData = { name: '' }, login = false } = location.state || {};
 console.log("profile login:",login)
console.log(location.state)
  return (
    <>
    {!location.state?
    //Login link
    <div className=''>
      <h1>You don't have account ,</h1>
<Link to="/Signup" >login first</Link>
    </div>
    :
    <div className=''>
 <h1>{formData.name}</h1>
 <p>{formData.email}</p>
 <p> you logged in as : <b>{formData.role}</b></p>
 <Link to="/skills"  id="more">see featured skills</Link>
    </div>
    
  }
   
    
  </>
  )
}

export default Profile
