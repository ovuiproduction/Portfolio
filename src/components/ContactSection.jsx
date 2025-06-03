import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin,faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="section contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <p>Email: onkarwaghmode0101@gmail.com</p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/onkar-waghmode-85638125a/"
                className="social-icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/ovuiproduction"
                className="social-icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
               <a
                href="https://www.youtube.com/channel/UCmc4Unnm8X7gRZvP1850frw"
                className="social-icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <form
            action="https://formsubmit.co/onkarwaghmode0101@gmail.com"
            method="POST"
            className="contact-form"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
