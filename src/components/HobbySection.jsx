// export default function HobbySection() {
//   return (
//     <>
//       <section className="section hobby-section">
//         <h2 className="section-title">Hobbies & Interest</h2>

//         <div className="professional-grid">
//           <div className="professional-card">
//             <div className="card-icon">👑</div>
//             <h3>Poems</h3>
//             <p>Leading technical teams to successful project completion</p>
//           </div>

//           <div className="professional-card">
//             <div className="card-icon">🎤</div>
//             <h3>Plant Shaping</h3>
//             <p>Presenting technical topics to diverse audiences</p>
//           </div>

//           <div className="professional-card">
//             <div className="card-icon">📊</div>
//             <h3>Cooking</h3>
//             <p>Creating compelling technical presentations</p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeatherAlt,
  faSeedling,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export default function HobbySection() {
  return (
    <>
      <section className="section hobby-section">
        <h2 className="section-title">Hobbies & Interests</h2>

        <div className="professional-grid">
          <div className="professional-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faFeatherAlt} size="2x" />
            </div>
            <h3>Poems</h3>
            <p>
               I enjoy reading and writing poems, and exploring different poetic styles to understand how emotions and ideas are expressed through language.
              <span><a href="#my-poems" className="poem-link">Read my poems →</a></span>
            </p>
          </div>

          <div className="professional-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faSeedling} size="2x" />
            </div>
            <h3>Plant Shaping</h3>
            <p>
              I find joy in shaping, cutting, and caring for plants — it’s my way of connecting with nature.
            </p>
          </div>

          <div className="professional-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faUtensils} size="2x" />
            </div>
            <h3>Cooking</h3>
            <p>
              I like spending time in the kitchen, not as a chef, but helping my mother and enjoying the process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
