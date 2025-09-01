import "./ProjectCard.css";
import LeftArrow from "../../assets/icons/left-arrow.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";

interface ProjectCardProps {
  imageSrc: string;
  link: string;
  showPrev?: boolean;
  showNext?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
}

const ProjectCard = ({
  imageSrc,
  link,
  showPrev,
  showNext,
  onPrev,
  onNext,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt="" />
      </a>

      {showPrev && (
        <button className="arrow left-arrow" onClick={onPrev}>
          <img src={LeftArrow} alt="Previous" />
        </button>
      )}
      {showNext && (
        <button className="arrow right-arrow" onClick={onNext}>
          <img src={RightArrow} alt="Next" />
        </button>
      )}
    </div>
  );
};

export default ProjectCard;
