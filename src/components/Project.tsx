import React from 'react';

interface ProjectProps {
  title: string;
  text: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({ title, text, link }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;