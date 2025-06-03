export default function AchievementSection() {
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
              <a
                href="https://www.youtube.com/watch?v=zVt5Ib4r5Y0"
                target="_blank"
                className="poem-link"
              >
                Demo Video →
              </a>
            </p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🌱</div>
            <h3>Agritech Solution Award</h3>
            <p>
              Best Solution in Agritech - National Hackathon by Innovation
              Foundation
            </p>
            <span>
              <a
                href="https://www.youtube.com/watch?v=TGfO0_ERgDQ"
                target="_blank"
                className="poem-link"
              >
                Demo Video →
              </a>
            </span>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">⭐</div>
            <h3>HackerRank Coder</h3>
            <p>5-Star Coder in Java</p>
            <p> 4-Star Coder in Problem Solving</p>
            <span>
              <a
                href="https://www.hackerrank.com/profile/onkarwaghmode011"
                target="_blank"
                className="poem-link"
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
    </>
  );
}
