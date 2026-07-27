import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import "./ProjectTemplate.css";
import DocumentSection from "../document-section/DocumentSections";
import { getProjectType } from "../../assets/projectTypes";

function ProjectTemplate(props) {
  const data = props.data;
  const { color } = getProjectType(data.projectType);

  // Use the first "title" content item as the hero H1 (falling back to the
  // project name), and skip it when rendering the body so we don't repeat it.
  const titleItem = data.content.find((item) => item.type === "title");
  const heroTitle = titleItem ? titleItem.content : data.name;
  const bodyContent = data.content.filter((item) => item.type !== "title");

  const componentMap = {
    header: (props) => <h2>{props.content}</h2>,
    paragraph: (props) => <p>{props.content}</p>,
    image: (props) => {
      const imageSrc = `/assets/images/${props.src}`;
      return (
        <figure className="image-container">
          <img src={imageSrc} alt={props.alt} className="image" />
          {props.caption && (
            <figcaption className="image-caption">{props.caption}</figcaption>
          )}
        </figure>
      );
    },
    video: (props) => {
      const videoSrc = `/assets/videos/${props.src}`;
      return (
        <div className="video-container">
          <video controls={props.controls}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      );
    },
    youtube: (props) => {
      return (
        <div className="video-container">
          <iframe
            src={props.src}
            title={props.title || "Project video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    },
    game: (props) => {
      return (
        <div className="game-embed">
          <iframe title={props.title} frameBorder="0" src={props.src}>
            <a href={props.href}>{props.title} by ryanhuntington</a>
          </iframe>
        </div>
      );
    },
  };

  return (
    <div>
      <div className="project-hero">
        <Link to="/projects" className="back-link">
          <FaArrowLeft aria-hidden="true" /> Back to projects
        </Link>
        <span className="project-eyebrow">
          <span className="type-dot" style={{ backgroundColor: color }} />
          {data.projectType}
        </span>
        <h1>{heroTitle}</h1>
        {data.description && (
          <p className="project-summary">{data.description}</p>
        )}
        <div className="project-meta">
          {data.experienceLevel && (
            <span className="meta-pill">{data.experienceLevel}</span>
          )}
          {data.tags &&
            data.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          {data.link && (
            <a
              className="meta-link"
              href={data.link}
              target="_blank"
              rel="noreferrer"
            >
              View code
            </a>
          )}
        </div>
      </div>

      {bodyContent.map((item, index) => {
        const Component = componentMap[item.type];
        if (Component) {
          return <Component key={index} {...item} />;
        }
        return null;
      })}
      {data.documents && <DocumentSection documents={data.documents} />}
    </div>
  );
}

export default ProjectTemplate;
