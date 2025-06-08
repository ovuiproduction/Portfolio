import { useEffect, useState } from "react";
import "../static/css/AchivementModal.css";

import hack_o_hire_1 from "../static/images/hack-o-hire-1.jpg";
import agri_tech_1 from "../static/images/agri-tech-1.jpg";

// Achievement data moved outside to avoid re-initialization on each render
const achievements = [
  {
    id: 1,
    icon: "🏆",
    title: "Hackathon Finalist",
    description: "Password Strength Analyzer Using GenAI",
    subText: "Finalist at Barclays Hack-O-Hire 2025",
    videoUrl: "https://www.youtube.com/embed/zVt5Ib4r5Y0?si=9DLytblYn7d89wZP",
    galleryImages: [{ id: 1, src: hack_o_hire_1, alt: "Project Screenshot 1" }],
  },
  {
    id: 2,
    icon: "🌱",
    title: "Agritech Solution Award",
    description:
      "Best Solution in Agritech - National Hackathon by Innovation Foundation",
    videoUrl: "https://www.youtube.com/embed/TGfO0_ERgDQ",
    galleryImages: [{ id: 1, src: agri_tech_1, alt: "Agritech Solution" }],
  },
];

const AchievementModal = ({ onClose, contentId }) => {
  const [activeTab, setActiveTab] = useState("video");
  const [selectedImage, setSelectedImage] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const selected = achievements.find((item) => item.id === contentId);
    setContent(selected);
  }, [contentId]);

  if (!content) return null;

  return (
    <div className="achievement-section-modal">
      <div className="achievement-section-modal-content">
        <button className="achievement-section-modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="achievement-section-modal-tabs">
          <button
            className={`achievement-section-modal-tab ${
              activeTab === "video" ? "active" : ""
            }`}
            onClick={() => setActiveTab("video")}
          >
            Video
          </button>
          <button
            className={`achievement-section-modal-tab ${
              activeTab === "gallery" ? "active" : ""
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
        </div>

        <div className="achievement-section-modal-body">
          {activeTab === "video" ? (
            <div className="achievement-section-video-container">
              <iframe
                width="560"
                height="315"
                src={content.videoUrl}
                title={content.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="achievement-section-gallery">
              {selectedImage ? (
                <div className="achievement-section-gallery-view">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="achievement-section-gallery-image"
                  />
                  <button
                    className="achievement-section-gallery-back"
                    onClick={() => setSelectedImage(null)}
                  >
                    ← Back to Gallery
                  </button>
                </div>
              ) : (
                <div className="achievement-section-gallery-grid">
                  {content.galleryImages.map((image) => (
                    <div
                      key={image.id}
                      className="achievement-section-gallery-item"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="achievement-section-gallery-thumbnail"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;
