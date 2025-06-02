import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import photo from "../static/images/photo.jpg";

export default function IntroSection() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Onkar_Waghmode.pdf";
    link.download = "Onkar_Waghmode_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <section id="intro" className="section intro">
        <div className="intro-left">
          <h2 className="intro-name">Onkar Anil Waghmode</h2>
          <h4 className="intro-title">Full Stack Developer</h4>
          <h5 className="intro-subtitle">
            Think it. Design it. Build it. That's me.
          </h5>
          <p className="intro-description">
            I am a dedicated Computer Engineering student with a passion for
            building innovative solutions using full-stack development, machine
            learning, and natural language processing. My focus is on creating
            reliable, user-focused applications that address real-world
            challenges.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <a onClick={downloadResume} className="btn btn-secondary">
              <FontAwesomeIcon icon={faDownload} /> Resume
            </a>
          </div>
        </div>
        <div className="intro-right">
          <div className="photo-frame">
            <img src={photo} alt="Onkar Waghmode" className="profile-photo" />
          </div>
        </div>
      </section>
    </>
  );
}
