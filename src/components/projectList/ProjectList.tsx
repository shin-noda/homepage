import { useRef, useState, useEffect } from "react";
import ProjectCard from "../projectCard/ProjectCard";
import LeftArrow from "../../assets/icons/left-arrow.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";
import "./ProjectList.css";

interface Project { 
  title: string; 
  imageSrc: string; 
  link: string; 
}
interface ProjectListProps { 
  projects: Project[]; 
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (listRef.current) {
      const width = listRef.current.offsetWidth;
      listRef.current.scrollBy({ left: direction === "right" ? width : -width, behavior: "smooth" });
      setCurrentIndex(prev =>
        direction === "right" ? Math.min(prev + 1, projects.length - 1) : Math.max(prev - 1, 0)
      );
    }
  };

  // Sync currentIndex when user scrolls manually
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="project-list-container">
      <div className="project-list" ref={listRef}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            imageSrc={project.imageSrc} 
            link={project.link} 
          />
        ))}
      </div>

      {currentIndex > 0 && (
        <button className="arrow left-arrow" onClick={() => scroll("left")}>
          <img src={LeftArrow} alt="Previous" />
        </button>
      )}

      {currentIndex < projects.length - 1 && (
        <button className="arrow right-arrow" onClick={() => scroll("right")}>
          <img src={RightArrow} alt="Next" />
        </button>
      )}
    </div>
  );
};

export default ProjectList;