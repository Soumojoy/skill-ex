import React from 'react'

const Testimonials = () => {
    const testimonials = [
        { name: 'Alice', feedback: 'This platform helped me learn guitar for free!' },
        { name: 'Bob', feedback: 'I’ve exchanged skills in web development and yoga!' },
        { name: 'Charlie', feedback: 'A great way to meet new people and learn together.' }
      ];

  return (
    <>
     <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Testimonials
