// components
import ProjectList from "../../components/projectList/ProjectList";

// images
import SANDP500MAP from "../../assets/project-images/s-and-p-500-map.png";
import AlgorithmVisualizer3D from "../../assets/project-images/algorithm-visualizer-3d.png";
import Picthesia from "../../assets/project-images/picthesia.png";
import CoFounderify from "../../assets/project-images/cofounderify.png";
import ProjectEarthGlobe from "../../assets/project-images/earth-globe.png";
import Bioluminescent from "../../assets/project-images/bioluminescent.png";

const projects = [
  { title: "S&P 500 Map", imageSrc: SANDP500MAP, link: "https://shin-noda.github.io/s-and-p-500-map" },
  { title: "Algorithm Visualizer 3D", imageSrc: AlgorithmVisualizer3D, link: "https://shin-noda.github.io/algorithm-visualizer-3d/" },
  { title: "Picthesia", imageSrc: Picthesia, link: "https://picthesia.appwrite.network" },
  { title: "CoFounderify", imageSrc: CoFounderify, link: "https://github.com/shin-noda/cofounderify" },
  { title: "Project Earth Globe", imageSrc: ProjectEarthGlobe, link: "https://shin-noda.github.io/earth-globe/" },
  { title: "Bioluminescent Mushrooms", imageSrc: Bioluminescent, link: "https://storymaps.arcgis.com/stories/97af0d8c4124439491ccf05be43ce8b0" },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <ProjectList projects={projects} />
    </section>
  );
};

export default Projects;
