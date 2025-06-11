// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faVideo } from "@fortawesome/free-solid-svg-icons";

// import "../static/css/ProjectPage.css";

// import Footer from "../components/Footer";

// export default function ProjectPage() {
//   return (
//     <>
//       <div className="projectpage-main-container">
//         <header className="projectpage-header">
//           <nav className="projectpage-nav">
//             <div className="projectpage-logo-block">
//               <div className="projectpage-logo"></div>
//             </div>
//             <h1>My Work</h1>
//           </nav>
//         </header>
//         <div className="project-container">
//           <div className="projects-grid">
//             <div className="project-card">
//               <div className="project-header">
//                 <h3>Kisan-DSS (Decision Support System)</h3>
//                 <div className="project-links">
//                   <a
//                     href="https://github.com/ovuiproduction/Kisan-DSS"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon icon={faGithub} /> GitHub
//                   </a>
//                   <a
//                     href="https://youtu.be/TGfO0_ERgDQ"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon icon={faVideo} /> Demo
//                   </a>
//                 </div>
//               </div>
//               <p className="project-description">
//                 AI-powered dashboard to assist farmers with crop selection,
//                 market pricing, and government scheme recommendations through
//                 real-time insights.
//               </p>
//               <div className="tech-stack">
//                 <span className="tech-tag">React</span>
//                 <span className="tech-tag">Flask</span>
//                 <span className="tech-tag">Gemini API</span>
//                 <span className="tech-tag">Random Forest</span>
//                 <span className="tech-tag">MongoDB</span>
//               </div>
//             </div>

//             <div className="project-card">
//               <div className="project-header">
//                 <h3>AI-ResearchMate</h3>
//                 <div className="project-links">
//                   <a
//                     href="https://github.com/ovuiproduction/Research-Assistant"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon icon={faGithub} /> GitHub
//                   </a>
//                   <a href="#" target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faVideo} /> Demo
//                   </a>
//                 </div>
//               </div>
//               <p className="project-description">
//                 AI co-research assistant that simplifies academic research
//                 through smart search, interactive Q&A, and humanized text
//                 transformation to bypass AI detection.
//               </p>
//               <div className="tech-stack">
//                 <span className="tech-tag">Python</span>
//                 <span className="tech-tag">FAISS</span>
//                 <span className="tech-tag">BART</span>
//                 <span className="tech-tag">MongoDB</span>
//                 <span className="tech-tag">ArXiv API</span>
//               </div>
//             </div>

//             <div className="project-card">
//               <div className="project-header">
//                 <h3>GRE MasterGuide</h3>
//                 <div className="project-links">
//                   <a
//                     href="https://github.com/ovuiproduction/GRE-Vocabulary-Preparation-Guide"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon icon={faGithub} /> GitHub
//                   </a>
//                   <a href="#" target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faVideo} /> Demo
//                   </a>
//                 </div>
//               </div>
//               <p className="project-description">
//                 Gamified AI-powered platform helping users master GRE vocabulary
//                 through daily goals, customized plans, and an AI chatbot mentor.
//               </p>
//               <div className="tech-stack">
//                 <span className="tech-tag">React</span>
//                 <span className="tech-tag">Node.js</span>
//                 <span className="tech-tag">MongoDB</span>
//                 <span className="tech-tag">Gemini API</span>
//               </div>
//             </div>

//             <div className="project-card">
//               <div className="project-header">
//                 <h3>Operating System Simulator</h3>
//                 <div className="project-links">
//                   <a
//                     href="https://github.com/ovuiproduction/Operating-System-Simulator"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon icon={faGithub} /> GitHub
//                   </a>
//                   <a href="#" target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faVideo} /> Demo
//                   </a>
//                 </div>
//               </div>
//               <p className="project-description">
//                 Built an OS simulator in C++ with memory management, CPU
//                 scheduling, and interrupt handling. Phase 1 handled
//                 single-program execution; Phase 2 added multiprogramming,
//                 virtual memory, and page replacement.
//               </p>
//               <div className="tech-stack">
//                 <span className="tech-tag">C++</span>
//                 <span className="tech-tag">CPU Scheduling</span>
//                 <span className="tech-tag">Page Replacement</span>
//                 <span className="tech-tag">Virtual Memory</span>
//                 <span className="tech-tag">Multiprogramming</span>
//                 <span className="tech-tag">Page Table</span>
//                 <span className="tech-tag">Advanced Interrupts</span>
//               </div>
//             </div>

//             <div className="project-card">
//               <div className="project-header">
//                 <h3>Compiler Design for Stack Operations</h3>
//                 <div className="project-links">
//                   <a
//                     href="https://github.com/ovuiproduction/Compiler-For-Stack"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon icon={faGithub} /> GitHub
//                   </a>
//                   <a href="#" target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faVideo} /> Demo
//                   </a>
//                 </div>
//               </div>
//               <p className="project-description">
//                 Built a compiler front-end using Flex and Bison to simulate
//                 stack operations. Implemented lexical analysis (tokenization),
//                 syntax analysis (CFG parsing), and semantic analysis (operation
//                 validation and stack behavior simulation).
//               </p>
//               <div className="tech-stack">
//                 <span className="tech-tag">Flex</span>
//                 <span className="tech-tag">Bison</span>
//                 <span className="tech-tag">C</span>
//                 <span className="tech-tag">Lexical Analysis</span>
//                 <span className="tech-tag">Syntax Analysis</span>
//                 <span className="tech-tag">Semantic Analysis</span>
//               </div>
//             </div>

//             <div className="project-card">
//               <div className="project-header">
//                 <h3>V-Learn: DSA Visualizer</h3>
//                 <div className="project-links">
//                   <a
//                     href="https://github.com/ovuiproduction/Data-Structure-and-Algorithm-Simulation"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon icon={faGithub} /> GitHub
//                   </a>
//                   <a
//                     href="https://ovuiproduction.github.io/Data-Structure-and-Algorithm-Simulation/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon icon={faVideo} /> Demo
//                   </a>
//                 </div>
//               </div>
//               <p className="project-description">
//                 Developed an interactive platform to visualize data structures
//                 and algorithms for better conceptual understanding. Focused on
//                 user-centered design with a clean UI, smooth animations, and
//                 intuitive controls to enhance learning through real-time
//                 feedback and engagement.
//               </p>
//               <div className="tech-stack">
//                 <span className="tech-tag">HTML</span>
//                 <span className="tech-tag">CSS</span>
//                 <span className="tech-tag">JavaScript</span>
//                 <span className="tech-tag">UI/UX Design</span>
//                 <span className="tech-tag">DSA</span>
//                 <span className="tech-tag">Animation</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faTimes } from "@fortawesome/free-solid-svg-icons";

import "../static/css/ProjectPage.css";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Kisan-DSS (Decision Support System)",
      githubLink: "https://github.com/ovuiproduction/Kisan-DSS",
      demoLink: "https://youtu.be/TGfO0_ERgDQ",
      description:
        "AI-powered dashboard to assist farmers with crop selection, market pricing, and government scheme recommendations through real-time insights.",
      techStack: ["React", "Flask", "Gemini API", "Random Forest", "MongoDB"],
      details: {
        problemStatement:
          "Farmers often struggle with making informed decisions about crop selection, market trends, and available government schemes.",
        objective:
          "To create an AI-powered system that provides data-driven recommendations to farmers for better agricultural decision-making.",
        features: [
          "Real-time crop recommendation based on soil and weather data",
          "Market price trends visualization",
          "Government scheme eligibility checker",
          "Multi-language support for rural farmers",
        ],
        methodology:
          "Used Random Forest algorithm for crop prediction, integrated with Gemini API for natural language queries, and MongoDB for flexible data storage.",
        documents: [
        //   "Project Proposal",
        //   "System Architecture",
        //   "User Manual",
        //   "Test Cases",
        ],
        futureScope:
          "Integration with IoT devices for real-time soil monitoring, expansion to livestock management, mobile app development.",
        problemsFaced: [
          "Data collection from disparate government sources",
          "Model accuracy in diverse climatic conditions",
          "UI adaptation for low-literacy users",
        ],
      },
    },
    {
      id: 2,
      title: "AI-ResearchMate",
      githubLink: "https://github.com/ovuiproduction/Research-Assistant",
      demoLink: "#",
      description:
        "AI co-research assistant that simplifies academic research through smart search, interactive Q&A, and humanized text transformation to bypass AI detection.",
      techStack: ["Python", "FAISS", "BART", "MongoDB", "ArXiv API"],
      details: {
        problemStatement:
          "Researchers spend excessive time sifting through papers and struggle with synthesizing information while maintaining original writing style.",
        objective:
          "Develop an AI assistant that accelerates research while preserving academic integrity and natural writing style.",
        features: [
          "Semantic search across research papers",
          "Q&A system for technical papers",
          "Text humanization to avoid AI detection",
          "Citation management and reference generation",
        ],
        methodology:
          "Used FAISS for efficient similarity search, BART for text summarization and transformation, and ArXiv API for paper retrieval.",
        documents: [
        //   "Research Paper",
        //   "System Design",
        //   "Evaluation Metrics",
        //   "User Guide",
        ],
        futureScope:
          "Integration with reference managers like Zotero, conference-specific writing styles, collaborative features.",
        problemsFaced: [
          "Balancing text transformation with content preservation",
          "Handling mathematical notations in papers",
          "Ensuring proper attribution of sources",
        ],
      },
    },
    {
      id: 3,
      title: "GRE MasterGuide",
      githubLink:
        "https://github.com/ovuiproduction/GRE-Vocabulary-Preparation-Guide",
      demoLink: "#",
      description:
        "Gamified AI-powered platform helping users master GRE vocabulary through daily goals, customized plans, and an AI chatbot mentor.",
      techStack: ["React", "Node.js", "MongoDB", "Gemini API"],
      details: {
        problemStatement:
          "GRE aspirants struggle with vocabulary retention and lack personalized, engaging study tools.",
        objective:
          "Create an adaptive learning platform that makes GRE prep efficient and engaging through gamification and AI.",
        features: [
          "Personalized word recommendations",
          "Spaced repetition system",
          "AI-powered conversational practice",
          "Progress tracking and analytics",
        ],
        methodology:
          "Used React for frontend, Node.js for backend, and Gemini API for generating contextual examples and conversations.",
        documents: [
        //   "Learning Algorithm",
        //   "UI Mockups",
        //   "Test Results",
        //   "Deployment Guide",
        ],
        futureScope:
          "Expansion to other test prep (GMAT, TOEFL), speech recognition for pronunciation practice, mobile app version.",
        problemsFaced: [
          "Generating contextually appropriate sentences",
          "Adaptive difficulty adjustment",
          "Maintaining user engagement long-term",
        ],
      },
    },
    {
      id: 4,
      title: "Operating System Simulator",
      githubLink:
        "https://github.com/ovuiproduction/Operating-System-Simulator",
      demoLink: "#",
      description:
        "Built an OS simulator in C++ with memory management, CPU scheduling, and interrupt handling. Phase 1 handled single-program execution; Phase 2 added multiprogramming, virtual memory, and page replacement.",
      techStack: [
        "C++",
        "CPU Scheduling",
        "Page Replacement",
        "Virtual Memory",
        "Multiprogramming",
        "Page Table",
        "Advanced Interrupts",
      ],
      details: {
        problemStatement:
          "Students learning operating systems concepts often struggle to visualize core mechanisms like memory management and process scheduling.",
        objective:
          "Create a hands-on educational tool that simulates key OS functionalities with clear visualization.",
        features: [
          "Multiple CPU scheduling algorithms (FCFS, SJF, Round Robin)",
          "Memory management with paging",
          "Page replacement algorithms (FIFO, LRU)",
          "Interactive visualization of system state",
        ],
        methodology:
          "Implemented core OS components in C++ with object-oriented design, focusing on modularity and clear state representation.",
        documents: [
        //   "Design Document",
        //   "Algorithm Specifications",
        //   "Test Cases",
        //   "User Manual",
        ],
        futureScope:
          "Adding file system simulation, multi-core scheduling, network simulation capabilities.",
        problemsFaced: [
          "Synchronization in multiprogramming environment",
          "Visualizing complex state transitions",
          "Balancing simulation accuracy with performance",
        ],
      },
    },
    {
      id: 5,
      title: "Compiler Design for Stack Operations",
      githubLink: "https://github.com/ovuiproduction/Compiler-For-Stack",
      demoLink: "#",
      description:
        "Built a compiler front-end using Flex and Bison to simulate stack operations. Implemented lexical analysis (tokenization), syntax analysis (CFG parsing), and semantic analysis (operation validation and stack behavior simulation).",
      techStack: [
        "Flex",
        "Bison",
        "C",
        "Lexical Analysis",
        "Syntax Analysis",
        "Semantic Analysis",
      ],
      details: {
        problemStatement:
          "Students learning compiler design need practical experience with language processing phases but find theoretical concepts abstract.",
        objective:
          "Develop a tangible compiler project focused on stack operations to demonstrate compilation phases.",
        features: [
          "Lexical analyzer for stack operation tokens",
          "Context-free grammar for stack operations",
          "Semantic validation of stack behavior",
          "Interactive visualization of compilation phases",
        ],
        methodology:
          "Used Flex for lexical analysis, Bison for parsing, and C for implementing semantic actions and stack simulation.",
        documents: [
        //   "Grammar Specification",
        //   "Phase Design Documents",
        //   "Test Programs",
        //   "Evaluation Report",
        ],
        futureScope:
          "Adding optimization phases, extending to full programming language, developing IDE integration.",
        problemsFaced: [
          "Handling ambiguous grammar cases",
          "Error recovery in parsing",
          "Visualizing abstract syntax tree",
        ],
      },
    },
    {
      id: 6,
      title: "V-Learn: DSA Visualizer",
      githubLink:
        "https://github.com/ovuiproduction/Data-Structure-and-Algorithm-Simulation",
      demoLink:
        "https://ovuiproduction.github.io/Data-Structure-and-Algorithm-Simulation/",
      description:
        "Developed an interactive platform to visualize data structures and algorithms for better conceptual understanding.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "UI/UX Design",
        "DSA",
        "Animation",
      ],
      details: {
        problemStatement:
          "Data structures and algorithms are often taught statically, making dynamic behaviors hard to grasp.",
        objective:
          "Create an interactive visualization tool that makes DSA concepts intuitive through animation and user control.",
        features: [
          "Step-by-step algorithm execution",
          "Interactive manipulation of data structures",
          "Multiple visualization styles (tree, graph, array)",
          "Speed control and pseudocode highlighting",
        ],
        methodology:
          "Pure frontend implementation using JavaScript with custom animation framework, focusing on responsive design.",
        documents: [
        //   "Design Mockups",
        //   "Algorithm Specifications",
        //   "Usability Study",
        //   "Performance Metrics",
        ],
        futureScope:
          "Adding more algorithms (e.g., machine learning), collaborative features, integration with coding platforms.",
        problemsFaced: [
          "Smooth animation of complex operations",
          "Handling large datasets without lag",
          "Creating intuitive controls for abstract concepts",
        ],
      },
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="projectpage-main-container">
      <header className="projectpage-header">
        <nav className="projectpage-nav">
          <div className="projectpage-logo-block">
            <div className="projectpage-logo"></div>
          </div>
          <h1>My Work</h1>
        </nav>
      </header>
      <p className="projectpage-instruction">Click the card to see projects in details</p>
      <div className="project-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FontAwesomeIcon icon={faVideo} /> Demo
                  </a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="project-modal-overlay">
            <div className="project-modal">
              <button className="modal-close-btn" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <div className="projectpage-modal-header">
                <h2>{selectedProject.title}</h2>
                <div className="projectpage-modal-links">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faVideo} /> Demo
                  </a>
                </div>
              </div>

              <div className="projectpage-modal-content">
                <div className="projectpage-modal-section">
                  <h3>Problem Statement</h3>
                  <p>{selectedProject.details.problemStatement}</p>
                </div>

                <div className="projectpage-modal-section">
                  <h3>Objective</h3>
                  <p>{selectedProject.details.objective}</p>
                </div>

                <div className="projectpage-modal-section">
                  <h3>Features</h3>
                  <ul>
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="projectpage-modal-section">
                  <h3>Tech Stack</h3>
                  <div className="tech-stack">
                    {selectedProject.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projectpage-modal-section">
                  <h3>Methodology</h3>
                  <p>{selectedProject.details.methodology}</p>
                </div>

                <div className="projectpage-modal-section">
                  <h3>Documents</h3>
                  <div className="documents-list">
                    {selectedProject.details.documents.map((doc, index) => (
                      <span key={index} className="projectpage-document-tag">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projectpage-modal-section">
                  <h3>Future Scope</h3>
                  <p>{selectedProject.details.futureScope}</p>
                </div>

                <div className="projectpage-modal-section">
                  <h3>Problems Faced</h3>
                  <ul>
                    {selectedProject.details.problemsFaced.map(
                      (problem, index) => (
                        <li key={index}>{problem}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
