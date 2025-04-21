import Project from "../components/Project";
import employee from "../assets/employee.png"
import readme from "../assets/readme.png"
import vehicle from "../assets/vehicle.png"
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import Footer from '../components/Footer';

export default function Portfolio() {
  const projects = [
    {
      title: "Employee-Tracker",
      text: "Keep track of your employees with ease.",
      link: "https://github.com/MAKAYLAJ14/Employee-Tracker",
      image: employee,
    },
    {
      title: "vehicle-builder",
      text: "Build and control your vehicle of choice.",
      link: "https://github.com/MAKAYLAJ14/vehicle-builder",
      image: vehicle,
    },
    {
      title: "Makayla-s-README-Generator",
      text: "Automatically generates a README file.",
      link: "https://github.com/MAKAYLAJ14/Makayla-s-README-Generator",
      image: readme,
    },
    {
      title: "Munii Budget App",
      text: "Balance your budget and keep track of upcoming needs.",
      link: "https://github.com/MAKAYLAJ14/Project-1",
      image: project1,
    },
    {
      title: "Differential Scheduler",
      text: "Simplified scheduling for sophisticated offerings (such as home inspections in our case) with minimal engagement. Create appointments that contain multiple time periods and vary in length. Connected to Google and MLS APIs for publicly available home details.",
      link: "https://github.com/MAKAYLAJ14/Differential_Scheduler/tree/main",
      image: project2,
    },
    {
      title: "Learning Management System",
      text: "Online class repository where students can learn and see all their class’s relevant information all in one place.",
      link: "https://github.com/MAKAYLAJ14/Learning-Management-System-LMS-",
      image: project3,
    },
  ];
  
  return (
    <div className="card-container">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      <Footer />
    </div>
  );
}