import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

export default function ProjectSection() {
  return (
    <>
      <section id="projects" className="section projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>Kisan-DSS (Decision Support System)</h3>
              <div className="project-links">
                <a
                  href="https://github.com/ovuiproduction/Kisan-DSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a
                  href="https://youtu.be/TGfO0_ERgDQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faVideo} /> Demo
                </a>
              </div>
            </div>
            <p className="project-description">
              AI-powered dashboard to assist farmers with crop selection, market
              pricing, and government scheme recommendations through real-time
              insights.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Flask</span>
              <span className="tech-tag">Gemini API</span>
              <span className="tech-tag">Random Forest</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>AI-ResearchMate</h3>
              <div className="project-links">
                <a
                  href="https://github.com/ovuiproduction/Research-Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faVideo} /> Demo
                </a>
              </div>
            </div>
            <p className="project-description">
              AI co-research assistant that simplifies academic research through
              smart search, interactive Q&A, and humanized text transformation
              to bypass AI detection.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">FAISS</span>
              <span className="tech-tag">BART</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">ArXiv API</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>GRE MasterGuide</h3>
              <div className="project-links">
                <a
                  href="https://github.com/ovuiproduction/GRE-Vocabulary-Preparation-Guide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faVideo} /> Demo
                </a>
              </div>
            </div>
            <p className="project-description">
              Gamified AI-powered platform helping users master GRE vocabulary
              through daily goals, customized plans, and an AI chatbot mentor.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Gemini API</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Operating System Simulator</h3>
              <div className="project-links">
                <a
                  href="https://github.com/ovuiproduction/Operating-System-Simulator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faVideo} /> Demo
                </a>
              </div>
            </div>
            <p className="project-description">
              Built an OS simulator in C++ with memory management, CPU
              scheduling, and interrupt handling. Phase 1 handled single-program
              execution; Phase 2 added multiprogramming, virtual memory, and
              page replacement.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">C++</span>
              <span className="tech-tag">CPU Scheduling</span>
              <span className="tech-tag">Page Replacement</span>
              <span className="tech-tag">Virtual Memory</span>
              <span className="tech-tag">Multiprogramming</span>
              <span className="tech-tag">Page Table</span>
              <span className="tech-tag">Advanced Interrupts</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Compiler Design for Stack Operations</h3>
              <div className="project-links">
                <a
                  href="https://github.com/ovuiproduction/Compiler-For-Stack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faVideo} /> Demo
                </a>
              </div>
            </div>
            <p className="project-description">
              Built a compiler front-end using Flex and Bison to simulate stack
              operations. Implemented lexical analysis (tokenization), syntax
              analysis (CFG parsing), and semantic analysis (operation
              validation and stack behavior simulation).
            </p>
            <div className="tech-stack">
              <span className="tech-tag">Flex</span>
              <span className="tech-tag">Bison</span>
              <span className="tech-tag">C</span>
              <span className="tech-tag">Lexical Analysis</span>
              <span className="tech-tag">Syntax Analysis</span>
              <span className="tech-tag">Semantic Analysis</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>V-Learn: DSA Visualizer</h3>
              <div className="project-links">
                <a
                  href="https://github.com/ovuiproduction/Data-Structure-and-Algorithm-Simulation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a
                  href="https://ovuiproduction.github.io/Data-Structure-and-Algorithm-Simulation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faVideo} /> Demo
                </a>
              </div>
            </div>
            <p className="project-description">
              Developed an interactive platform to visualize data structures and
              algorithms for better conceptual understanding. Focused on
              user-centered design with a clean UI, smooth animations, and
              intuitive controls to enhance learning through real-time feedback
              and engagement.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">UI/UX Design</span>
              <span className="tech-tag">DSA</span>
              <span className="tech-tag">Animation</span>
            </div>
          </div>
        </div>
        <div className="see-more-container">
          <a href="/my-work" target="_blank" className="see-more-btn">
            See More Projects
          </a>
        </div>
      </section>
    </>
  );
}
