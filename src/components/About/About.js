import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../../portfolio";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const { name, role, description, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am{" "}
          <span className="about__name">
            {name}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 8, 0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ display: "inline-block" }} // Ensures animation works properly
            >
              👋
            </motion.span>
          </span>
        </h1>
      )}

      {role && <h2 className="about__role">{role}.</h2>}
      <p style={{ textAlign: "center" }} className="about__desc">
        {description && description}
      </p>

      <div
        style={{
          width: "100%",
          justifyContent: "center",
        }}
        className="about__contact center"
      >
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
