import React, { useState } from 'react'
import Profile from './Profile'
import Howitworks from './Howitworks';
import Featuredskills from './Featuredskills';
import Testimonials from './Testimonials';
import Footer from './Footer';
const Homepage2 = () => {
  return (
    <>
    <Profile home={true}/>
    <Featuredskills />
    <Howitworks />
    <Testimonials />
            <Footer />
    </>
  )
}

export default Homepage2
