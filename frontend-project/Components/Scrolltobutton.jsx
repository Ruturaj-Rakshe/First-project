"use client"
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const Scrolltobutton = ({ title, icon, position }) => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('recent-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToProjects}  
      style={{ display: 'flex', alignItems: 'center', justifyContent: position === 'right' ? 'flex-end' : 'flex-start' }}>
      {title}
      {icon}
    </button>
  );
};

export default Scrolltobutton;
