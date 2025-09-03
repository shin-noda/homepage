import ProjectList from "../../components/projectList/ProjectList";

// Images
import Picthesia from "../../assets/project-images/picthesia.png";
import CoFounderify from "../../assets/project-images/cofounderify.png";
import LightsAftertheBible from "../../assets/project-images/lightsafterthebible.png";
import Bioluminescent from "../../assets/project-images/bioluminescent.png";

const projects = [
  { title: "Picthesia", imageSrc: Picthesia, link: "https://picthesia.appwrite.network" },
  { title: "CoFounderify", imageSrc: CoFounderify, link: "https://github.com/shin-noda/cofounderify" },
  { title: "Lights After the Bible", imageSrc: LightsAftertheBible, link: "https://lightsafterthebible.com" },
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
