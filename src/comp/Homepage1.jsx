import React from 'react'
import Hero from './Hero';
import Howitworks from './Howitworks';
import Featuredskills from './Featuredskills';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Homepage1 = () => {

  return (
     <>
{/* before login */}
      <Hero />
            <Howitworks />
            <Featuredskills />
            <Testimonials />
            <Footer />
      </>
  )
}

export default Homepage1
