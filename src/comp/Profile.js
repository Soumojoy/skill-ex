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
  <Link to="/Signup" >login first</Link>  :  <h1>{formData.name}</h1>
  }
   
    
  </>
  )
}

export default Profile
