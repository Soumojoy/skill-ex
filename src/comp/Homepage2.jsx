import React, { useState } from 'react'
import Profile from './Profile'
import Featuredskills from './Featuredskills';
const Homepage2 = () => {
  return (
    <>
    <Profile home={true}/>
    <Featuredskills />
    </>
  )
}

export default Homepage2
