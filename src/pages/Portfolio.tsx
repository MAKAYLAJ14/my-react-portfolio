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
      title: "Munii Budget App",
      text: "Balance your budget and keep track of upcoming needs.",
      link: "https://makaylaj14.github.io/Project-1/",
      image: project1,
    },
    {
      title: "Differential Scheduler",
      text: "Simplified scheduling for sophisticated offerings (such as home inspections in our case) with minimal engagement. Create appointments that contain multiple time periods and vary in length. Connected to Google and MLS APIs for publicly available home details.",
      link: "https://differential-scheduler-1.onrender.com/",
      image: project2,
    },
    {
      title: "Learning Management System",
      text: "Online class repository where students can learn and see all their class’s relevant information all in one place.",
      link: "https://learning-management-system-lms-1-il4z.onrender.com/",
      image: project3,
    },
    {
      title: "Employee-Tracker",
      text: "Keep track of your employees with ease.",
      link: "https://youtu.be/gZwvFtxPbTQ?si=yyG1yAdQvv8YYCV8",
      image: employee,
    },
    {
      title: "vehicle-builder",
      text: "Build and control your vehicle of choice.",
      link: "https://youtu.be/jf8LzP-bobM",
      image: vehicle,
    },
    {
      title: "Makayla-s-README-Generator",
      text: "Automatically generates a README file.",
      link: "https://youtu.be/eM2Pobv_EYY",
      image: readme,
    },
  
  ];
  
  return (
    <>
      <h2>Projects</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        <Footer />
      </div>
    </>
  );
}