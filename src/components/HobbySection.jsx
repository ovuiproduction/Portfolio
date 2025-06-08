import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeatherAlt,
  faSeedling,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import ProfessionalCard from "./PoemSection";

export default function HobbySection() {
  return (
    <>
      <section className="section hobby-section">
        <h2 className="section-title">Hobbies & Interests</h2>

        <div className="professional-grid">
          <ProfessionalCard />

          <div className="professional-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faSeedling} size="2x" />
            </div>
            <h3>Plant Shaping</h3>
            <p>
              I enjoy shaping and caring for plants — a mindful hobby that
              cultivates patience and complements my analytical work as an
              engineer.
            </p>
          </div>

          <div className="professional-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faUtensils} size="2x" />
            </div>
            <h3>Cooking</h3>
            <p>
              I enjoy spending time in the kitchen—not necessarily as a chef,
              but assisting my mother and enjoying the process. Cooking teaches
              me patience and creativity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
