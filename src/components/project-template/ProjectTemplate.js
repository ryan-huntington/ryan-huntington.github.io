// import "../pages/styles.css";
import "./ProjectTemplate.css";

function ProjectTemplate(props) {
  const componentMap = {
    title: (props) => <h1>{props.content}</h1>,
    header: (props) => <h2>{props.content}</h2>,
    paragraph: (props) => <p>{props.content}</p>,
    image: (props) => {
      // Dynamically require the image based on the src value
      const imageSrc = require(`../../assets/${props.src}`);
      return (
        <div className="image-container">
          <img src={imageSrc} alt={props.alt} className="image" />
          {props.caption && <p className="image-caption">{props.caption}</p>}
        </div>
      );
    },
    video: (props) => {
      const videoSrc = require(`../../assets/${props.src}`);
      return (
        <video controls={props.controls}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      );
    },
    youtube: (props) => {
      return (
        <iframe
          width="560"
          height="315"
          src={props.src}
          title={props.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    },
    // "type": "youtube",
    // "src": "https://example.com/video.mp4",
    // "controls": true
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
    </div>
  );
}

export default ProjectTemplate;
