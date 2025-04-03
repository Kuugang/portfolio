import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    {project.preview && (
      <img
        src={project.preview}
        alt="Preview"
        style={{
          width: "100%",
          borderRadius: "8px",
          objectFit: "contain", // Adjusts the image to cover the area while maintaining aspect ratio
        }}
      />
    )}

    <h3 style={{ marginTop: "20px" }}>{project.name}</h3>
    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        justifyContent: "center",
      }}
    >
      {project.sourceCode && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <a
            href={project.sourceCode}
            aria-label="source code"
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            <GitHubIcon />
            <p>Source</p>
          </a>
        </div>
      )}
      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label="live preview"
          className="link link--icon"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <LaunchIcon />
          <p>Preview</p>
        </a>
      )}
    </div>
  </div>
);

export default ProjectContainer;
