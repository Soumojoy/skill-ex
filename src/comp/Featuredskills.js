import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import skillsData from '../skills.json';  // Import the JSON data

const Featuredskills = ({home}) => {
   
  const [skills, setSkills] = useState([]); // State for fetched skills
const [showall,setShowall]= useState(false);
const displayedSkills = showall ? skills : skills.slice(0, 10);

//fething data
useEffect(() => {
  // Set the skills data when the component mounts
  setSkills(skillsData.skills);
}, []);


  return (
   <>
{
  home ?

  <section className="featured-skills">
      <h2>Popular Skills</h2>
      <div className="skills-list">
        {skills .map((name, index) => (
          <div className="skill-card" key={index}>
            <h3>{name.skill}</h3>
            <p>Learn or share your knowledge in {name.skill}!</p>
          </div>
        ))}
      </div>
      {/* {!showall && (
          <Link to="/skills" onClick={() => setShowall(true)} id="more">Explore more skills</Link>
        )} */}
    </section> :

      <section className="featured-skills">
      <h2>Popular Skills</h2>
      <div className="skills-list">
        {displayedSkills .map((name, index) => (
          <div className="skill-card" key={index}>
            <h3>{name.skill}</h3>
            <p>Learn or share your knowledge in {name.skill}!</p>
          </div>
        ))}
      </div>
      {!showall && (
          <Link to="/skills" onClick={() => setShowall(true)} id="more">Explore more skills</Link>
        )}
    </section>

}

  
   
   </>
  )
}

export default Featuredskills
