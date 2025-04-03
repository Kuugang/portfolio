import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>

      <span style={{ display: "block", textAlign: "center" }}>
        <span>Want to talk? Contact me at </span>
        <a style={{ color: "#4A90E2" }} href={`mailto:${contact.email}`}>
          {contact.email}.
        </a>
        <p>I'll respond whenever I can.</p>
      </span>
    </section>
  );
};

export default Contact;
