import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    {
      title: "Employee-Tracker",
      text: "Keep track of your employees with ease.",
      link: "https://github.com/MAKAYLAJ14/Employee-Tracker",
    },
    {
      title: "weather-dashboard",
      text: "Monitor the weather around the world.",
      link: "https://github.com/MAKAYLAJ14/weather-dashboard",
    },
    {
      title: "vehicle-builder",
      text: "Build and control your vehicle of choice.",
      link: "https://github.com/MAKAYLAJ14/vehicle-builder",
    },
    {
      title: "Makayla-s-README-Generator",
      text: "Automatically generates a README file.",
      link: "https://github.com/MAKAYLAJ14/Makayla-s-README-Generator",
    },
    {
      title: "Munii Budget App",
      text: "Balance your budget and keep track of upcoming needs.",
      link: "https://github.com/MAKAYLAJ14/Project-1",
    },
  ];

  return (
    <div className="card-container">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}