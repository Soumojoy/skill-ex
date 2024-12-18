import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Featuredskills = () => {
   
  const skills = [ { skill: "JavaScript" }, { skill: "HTML" }, { skill: "CSS" }, { skill: "React" }, { skill: "Node.js" }, { skill: "Python" }, { skill: "SQL" }, { skill: "Git" }, { skill: "Docker" }, { skill: "Kubernetes" }, { skill: "Photography" }, { skill: "Photo Editing" }, { skill: "Lighting Techniques" }, { skill: "Composition" }, { skill: "Portrait Photography" }, { skill: "Landscape Photography" }, { skill: "Web Design" }, { skill: "Graphic Design" }, { skill: "SEO" }, { skill: "Content Creation" }, { skill: "Project Management" }, { skill: "Data Analysis" }, { skill: "Machine Learning" }, { skill: "Public Speaking" }, { skill: "Writing" }, { skill: "Marketing" }, { skill: "Sales" }, { skill: "Customer Service" }, { skill: "Financial Analysis" }, { skill: "Accounting" }, { skill: "Human Resources" }, { skill: "Teaching" }, { skill: "Research" }, { skill: "Healthcare" }, { skill: "Nursing" }, { skill: "Engineering" }, { skill: "Architecture" }, { skill: "Law" }, { skill: "Negotiation" }, { skill: "Conflict Resolution" }, { skill: "Leadership" }, { skill: "Teamwork" }, { skill: "Time Management" }, { skill: "Critical Thinking" }, { skill: "Problem Solving" }, { skill: "Creativity" }, { skill: "Adaptability" }, { skill: "Emotional Intelligence" } ];
const [showall,setShowall]= useState(false);
const displayedSkills = showall ? skills : skills.slice(0, 10);
  return (
   <>
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
   
   </>
  )
}

export default Featuredskills
