import "./ProjectCard.css";

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
          &#8592;
        </button>
      )}
      {showNext && (
        <button className="arrow right-arrow" onClick={onNext}>
          &#8594;
        </button>
      )}
    </div>
  );
};

export default ProjectCard;