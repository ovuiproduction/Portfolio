// import { faL } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

// import AchievementModal from "./AchivementModel";

// export default function AchievementSection() {
//   const [isModalOpen, setModelState] = useState(false);

//   return (
//     <>
//       <section id="achievements" className="section achievements">
//         <h2 className="section-title">Achievements</h2>
//         <div className="achievements-grid">
//           <div className="achievement-card">
//             <div className="achievement-icon">🏆</div>
//             <h3>Hackathon Finalist</h3>
//             <p>Password Strength Analyzer Using GenAI</p>
//             <p>Finalist at Barclays Hack-O-Hire 2025</p>
//             <p>
//               <a onClick={() => setModelState(true)} className="poem-link">
//                 Demo Video →
//               </a>
//             </p>
//             {isModalOpen && (
//               <AchievementModal
//                 onClose={() => setModelState(false)}
//                 contentId={1}
//               />
//             )}
//           </div>
//           <div className="achievement-card">
//             <div className="achievement-icon">🌱</div>
//             <h3>Agritech Solution Award</h3>
//             <p>
//               Best Solution in Agritech - National Hackathon by Innovation
//               Foundation
//             </p>
//             <p>
//               <a onClick={() => setModelState(true)} className="poem-link">
//                 Demo Video →
//               </a>
//             </p>
//             {isModalOpen && (
//               <AchievementModal
//                 onClose={() => setModelState(false)}
//                 contentId={2}
//               />
//             )}
//           </div>
//           <div className="achievement-card">
//             <div className="achievement-icon">⭐</div>
//             <h3>HackerRank Coder</h3>
//             <p>5-Star Coder in Java</p>
//             <p> 4-Star Coder in Problem Solving</p>
//             <span>
//               <a
//                 href="https://www.hackerrank.com/profile/onkarwaghmode011"
//                 target="_blank"
//                 className="poem-link"
//               >
//                 HackerRank Profile →
//               </a>
//             </span>
//           </div>
//           <div className="achievement-card">
//             <div className="achievement-icon">📄</div>
//             <h3>Research Publication</h3>
//             <p>
//               Paper published in Scopus-indexed journal{" "}
//               <i>Communications on Applied Nonlinear Analysis</i>
//               <span>
//                 <a
//                   href="https://internationalpubls.com/index.php/cana/article/view/762"
//                   target="_blank"
//                   className="poem-link"
//                 >
//                   Read paper →
//                 </a>
//               </span>
//             </p>
//           </div>
//           <div className="achievement-card">
//             <div className="achievement-icon">📜</div>
//             <h3>Patent Published</h3>
//             <p>Smart Gear Recommendation System Using IoT</p>
//             <p>Indian Patent Office</p>
//             <p>
//               <i>Application No: 202521004086</i>
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { useState } from "react";
import AchievementModal from "./AchivementModel";

export default function AchievementSection() {
  const [modalContentId, setModalContentId] = useState(null);

  const openModal = (id) => setModalContentId(id);
  const closeModal = () => setModalContentId(null);

  return (
    <>
      <section id="achievements" className="section achievements">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <h3>Hackathon Finalist</h3>
            <p>Password Strength Analyzer Using GenAI</p>
            <p>Finalist at Barclays Hack-O-Hire 2025</p>
            <p>
              <a onClick={() => openModal(1)} className="poem-link" role="button">
                Demo Video →
              </a>
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🌱</div>
            <h3>Agritech Solution Award</h3>
            <p>
              Best Solution in Agritech - National Hackathon by Innovation Foundation
            </p>
            <p>
              <a onClick={() => openModal(2)} className="poem-link" role="button">
                Demo Video →
              </a>
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">⭐</div>
            <h3>HackerRank Coder</h3>
            <p>5-Star Coder in Java</p>
            <p>4-Star Coder in Problem Solving</p>
            <span>
              <a
                href="https://www.hackerrank.com/profile/onkarwaghmode011"
                target="_blank"
                className="poem-link"
                rel="noopener noreferrer"
              >
                HackerRank Profile →
              </a>
            </span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">📄</div>
            <h3>Research Publication</h3>
            <p>
              Paper published in Scopus-indexed journal{" "}
              <i>Communications on Applied Nonlinear Analysis</i>
              <span>
                <a
                  href="https://internationalpubls.com/index.php/cana/article/view/762"
                  target="_blank"
                  className="poem-link"
                  rel="noopener noreferrer"
                >
                  Read paper →
                </a>
              </span>
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">📜</div>
            <h3>Patent Published</h3>
            <p>Smart Gear Recommendation System Using IoT</p>
            <p>Indian Patent Office</p>
            <p>
              <i>Application No: 202521004086</i>
            </p>
          </div>
        </div>
      </section>

      {modalContentId && (
        <AchievementModal
          contentId={modalContentId}
          onClose={closeModal}
        />
      )}
    </>
  );
}
