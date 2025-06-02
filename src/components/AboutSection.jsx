import "../static/css/AboutSection.css";
import profileImage from "../static/images/profile.jpg"; // Replace with your image

export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Profile or Tech Illustration" />
          <div className="image-overlay"></div>
        </div>
        <div className="about-content">
          <p>
            As a final-year B.Tech student in Computer Engineering, I specialize
            in full-stack web development, machine learning, and natural language
            processing. My expertise includes building scalable applications and
            leveraging AI to solve complex problems, with a keen interest in
            cybersecurity and the application of AI in enhancing security
            measures.
          </p>
          <p>
            With a strong foundation in computer science fundamentals such as data
            structures, algorithms, operating systems, and computer networks, I
            design solutions that are both technically robust and user-centric. I
            am passionate about using AI-driven approaches to strengthen
            cybersecurity, ensuring secure and reliable systems. I am eager to
            contribute my skills to innovative projects in a professional setting.
          </p>
        </div>
      </div>
    </section>
  );
}
