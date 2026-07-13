// import "../pages/styles.css";
import "./ProjectTemplate.css";
import DocumentSection from "../document-section/DocumentSections";

function ProjectTemplate(props) {
  const componentMap = {
    title: (props) => <h1>{props.content}</h1>,
    header: (props) => <h2>{props.content}</h2>,
    paragraph: (props) => <p>{props.content}</p>,
    image: (props) => {
      // Dynamically require the image based on the src value
      const imageSrc = `/assets/images/${props.src}`;
      return (
        <div className="image-container">
          <img src={imageSrc} alt={props.alt} className="image" />
          {props.caption && <p className="image-caption">{props.caption}</p>}
        </div>
      );
    },
    video: (props) => {
      const videoSrc = `/assets/videos/${props.src}`;
      return (
        <video controls={props.controls}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      );
    },
    youtube: (props) => {
      return (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={props.src}
            title={props.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    },
    game: (props) => {
      return (
        <iframe
          title={props.title}
          frameborder="0"
          src={props.src}
          width="552"
          height="167"
        >
          <a href={props.href}>{props.title} by ryanhuntington</a>
        </iframe>
      );
    },
  };

  return (
    <div>
      {props.data.content.map((item, index) => {
        const Component = componentMap[item.type]; // Select component type based on `type` field
        if (Component) {
          return <Component key={index} {...item} />;
        }
        return null; // In case of an unknown type
      })}
      {props.data.documents && (
        <DocumentSection documents={props.data.documents} />
      )}
    </div>
  );
}

export default ProjectTemplate;
