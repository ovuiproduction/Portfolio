export default function SkillSection() {
  return (
    <>
      <section id="skills" className="section skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-globe category-icon"></i>
              <h3>Languages</h3>
            </div>
            <div className="skill-items">
              {[
                { name: "C", icon: "fa-solid fa-c" }, // No specific C icon, using generic code icon
                { name: "Java", icon: "fab fa-java" },
                { name: "HTML", icon: "fab fa-html5" },
                { name: "CSS", icon: "fab fa-css3-alt" },
                { name: "JavaScript", icon: "fab fa-js" },
                { name: "SQL", icon: "fas fa-database" },
                { name: "Python", icon: "fa-brands fa-python" },
              ].map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon-container">
                    <i className={`${skill.icon} skill-icon`}></i>
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-microchip"></i>
              </div>
              <h3>Technology</h3>
            </div>
            <div className="skill-items">
              {[
                { name: "React", level: "90%", icon: "fab fa-react" },
                { name: "Node.js", level: "85%", icon: "fab fa-node-js" },
                { name: "MongoDB", level: "80%", icon: "fas fa-database" },
                { name: "MySQL", level: "75%", icon: "fas fa-database" },
                {
                  name: "Machine Learning",
                  level: "82%",
                  icon: "fas fa-robot",
                },
                {
                  name: "Artificial Intelligence",
                  level: "85%",
                  icon: "fas fa-brain",
                },
                { name: "NLP", level: "80%", icon: "fas fa-language" },
                { name: "RAG", level: "85%", icon: "fas fa-book-open" },
                { name: "FAISS", level: "75%", icon: "fas fa-search" },
              ].map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <i className={`${skill.icon} skill-icon`}></i>
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-tools category-icon"></i>
              <h3>Tools</h3>
            </div>
            <div className="skill-items">
              {[
                { name: "Git", icon: "fab fa-git" },
                { name: "GitHub", icon: "fab fa-github" },
                { name: "VSCode", icon: "fas fa-code" },
                { name: "Android Studio", icon: "fab fa-android" },
                { name: "Jupyter Notebook", icon: "fas fa-book" },
                { name: "Linux Terminal", icon: "fas fa-terminal" },
              ].map((skill, index) => (
                <div className="skill-item" key={index}>
                  <i className={`${skill.icon} skill-icon`}></i>
                  <div className="skill-name">
                    <span>{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section professional-skills">
        <h2 className="section-title">Professional Skills</h2>

        <div className="professional-grid">
          <div className="professional-card">
            <div className="card-icon">👑</div>
            <h3>Leadership</h3>
            <p>Leading technical teams to successful project completion</p>
          </div>

          <div className="professional-card">
            <div className="card-icon">🎤</div>
            <h3>Public Speaking</h3>
            <p>Presenting technical topics to diverse audiences</p>
          </div>

          <div className="professional-card">
            <div className="card-icon">📊</div>
            <h3>Presentation</h3>
            <p>Creating compelling technical presentations</p>
          </div>

          <div className="professional-card">
            <div className="card-icon">💬</div>
            <h3>Communication</h3>
            <p>Clear articulation of technical concepts</p>
          </div>
        </div>
      </section>
    </>
  );
}
