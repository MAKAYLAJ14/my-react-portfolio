import Headshot from '../assets/Headshot.png';
import React from 'react';
import Footer from '../components/Footer'; 

const About: React.FC = () => {
  return (
    <div className="me" >
      <h1>Who is Makayla?</h1>
      <img className="pic" src={Headshot} alt="Headshot" />
      <p className='aboutme'>
        I am a dedicated Software Engineering Bootcamp graduate with a B.A. in Information Systems Management and hands-on experience as a System Support Engineer at Patient First. With a strong foundation in Java, JavaScript, SQL, and Agile team practices, I am equipped to tackle the demands of full-stack software engineering.
        My current role has honed my problem-solving skills and provided me with a unique perspective on systems infrastructure, which I leverage in developing efficient, user-centered applications. Now, I am excited to bring my technical skills and passion for continuous learning to a full-stack software engineering position.
      </p>
      <Footer />
    </div>
  );
}

export default About;

