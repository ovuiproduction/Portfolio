import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeatherAlt,
  faArrowLeft,
  faVolumeUp,
  faFont,
} from "@fortawesome/free-solid-svg-icons";

import "../static/css/PoemSection.css";

const PoemsModal = ({ isOpen, onClose }) => {
  console.log(isOpen);
  const [activeTab, setActiveTab] = useState("my-poems");
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [fontSize, setFontSize] = useState(16);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synthRef = useRef(null);

  const myPoems = [
    {
      id: 1,
      title: "पाऊस सरी",
      author: "Onkar Waghmode",
      content:
        "या पाऊस सरी पडल्या भूमीवरी\n" +
        "आनंदाने नाचू लागले गाऊ लागले पक्षी वृक्षांवरी\n" +
        "भूमीच्या या कुशीत आले जलबिंदुंचे झरे\n" +
        "प्रति बीजातून नव पल्लवी अंकुरे\n" +
        "सरी सरीतून धावत येती हर्‍यांची पाखरे\n" +
        "जलस्पर्शाने जीवंत होती तृणांचे हे तुरे\n" +
        "मातीचा हा गंध कस्तुरी आसमंताचा रंग संदुरी\n" +
        "तप्त भूमी ही तृप्त होऊनी परिमळ उधळीत फिरते\n" +
        "दरी डोंगर अन् टेकडयांनी हिरवे गीत घुमते\n" +
        "तुडुंब होऊनी सरिता आता चैतन्याने फुलते\n" +
        "उष्ण झुळूक ही थंड होऊनी शीतल माया देते\n" +
        "तेज पाहूनी लतिकेचे ते आसमंत हा उजळून जाई\n" +
        "मेघांचे ते संगीत गजना अंत:करणी घुमत राही\n" +
        "मन पुलकित होते दृश्य ऐसे हरणे बागडनारी\n" +
        "पर्जन्याचे गीत ऐकूनी मयुरे डोलणारी\n" +
        "अमृताचे कुंभ घेऊनी येई वृषाराणी\n" +
        "ओसाड भुमी जाते निघुनी रेशमी जादूनी\n" +
        "समृद्धीचा किरण येतो भूमीवरी तेजूनी\n\n" +
        "वेलींवरती कळी खुलूनी येती फुले हरवूनी\n" +
        "नजराणा हा निसर्गाचा चमत्कार हा सुखकारी\n" +
        "चमकून दिसतो भूमीवरी हा हिरवा शालू भरजारी.",
    },
    {
      id: 2,
      title: "आधी थोड हसायला शिका",
      author: "Onkar Waghmode",
      content:
        "आयुष्याच्या शर्यतीत धावताना विनोदाच्या अपघातावर थोडं हसायला शिका.\n" +
        "आनंदात जरा जास्त, पण दुखात उगीच थोडं हसायला शिका.\n" +
        "चिंता करून दररोज मरण्यापेक्षा,\n" +
        "हसून आयुष्य वाढवा,\n" +
        "त्या साठी आधी थोडं हसायला शिका.\n" +
        "अपमान लक्षात ठेवून आतल्या आत जळत राहण्यापेक्षा,\n" +
        "मित्रांनी केलेली थट्टा-मस्करी,\n" +
        "कधी पहिल्यांदा आलेले विनोदी प्रसंग आठवा आणि मग परत हास्य खुलू द्या.\n" +
        "तुम्ही हसा आणि हसवायला शिका,\n" +
        "पण आधी थोडं हसायला शिका.\n\n" +
        "प्रत्येक वेळी बोलताना प्रसंग अवधान राखून गंभीरपणेच बोलायला हवं,\n" +
        "हा नियम कधीतरी तोडून थोडं निरर्थक बोलून हशा पिकवायला काय हरकत आहे?\n" +
        "तेवढंच आनंद पसरतो, गंभीरता थोडी कमी होते आणि\n" +
        "ह्या आनंदात कित्येकदा अडचणींमधून बाहेर येण्याची वाट ही सापडते.\n" +
        "असंच परिवार जपायला शिका,\n" +
        "पण आधी थोडं हसायला शिका.\n" +
        "कधी तुमच्यावर कोणी हसलं तर,\n" +
        "रागाने त्याला तोडण्यापेक्षा,\n" +
        "तुम्हीही हसा त्याच्याबरोबर\n" +
        "आणि माणसं जोडायला शिका,\n" +
        "पण आधी थोडं हसायला शिका.",
    },
    {
      id: 3,
      title: "सोचा न था",
      author: "Onkar Waghmode",
      content:
        "सोचा न था ऐसा दिन भी आएगा,\n" +
        "कि एक दिन छुपाना पड़ेगा अपनों से ही,\n" +
        "खुद को बचाना पड़ेगा अपनों से ही।\n\n" +
        "समय भी देखो कैसा है,\n" +
        "जब मेरी ओर था कभी\n" +
        "यही अपने होते थे ईर्द-गिर्द मेरे।\n" +
        "मेरे लिए रोते थे, मेरे लिए सिसकते थे,\n" +
        "मेरे लिए ही गाते थे, मेरे लिए मर जाते थे।\n\n" +
        "मुझे चोट लग जाती थी,\n" +
        "पर दर्द की हुंकार उनके मुख से आती थी।\n" +
        "मुझे कोई धमकाता तो\n" +
        "मारने उसे वो निकलते थे।\n\n" +
        "क्या बताऊँ — रोना मुझे आता था,\n" +
        "पर आँसू उनके बहते थे।\n" +
        "जीता था मैं उनके लिए,\n" +
        "और वो मेरे लिए मर जाते थे।\n\n" +
        "आज अचानक क्या हुआ है,\n" +
        "कुछ उलटा-पुलटा हो गया है।\n\n" +
        "घूम गए हैं सब गृह मेरे,\n" +
        "शायद शनि देव ने प्रवेश किया है।\n" +
        "बर्फीले मौसम में जैसा बंजर-बंजर हो गया है,\n" +
        "फूलों के मैदानों में जैसे काँटों ने जनम लिया है।\n\n" +
        "जो कल मरते थे मेरे लिए,\n" +
        "वो मारने मुझे चल आए हैं।\n" +
        "जो रोते थे मेरे लिए,\n" +
        "अब रुलाने मुझे वो आए हैं।\n\n" +
        "जब पैरों पर मैं अपने खड़ा भी हो न सकता था,\n" +
        "इन्होने ही तो आधार दिया था, चलना भी सिखाया था।\n" +
        "आज दौड़ रहा हूँ अकेले मैं,\n" +
        "और वो गिराने मुझे चले आए है।",
    },
    // {
    //   id: 4,
    //   title: "मुलगी",
    //   author: "Onkar Waghmode",
    //   content:
    //     "मुलगी म्हणजे मुलगीच असते\n" +
    //     "सुख दुःखाचा निर्मळ निर्झर असते\n" +
    //     "सोसुनी छळ मुखी गोड हसते\n" +
    //     "कठोर यातनांचा ती डोंगर चढते\n" +
    //     "तिचं असते आई मायेची प्रेमाची नि ममतेची\n" +
    //     "पुरविते लाड होऊन आजी हळूवार मनाची\n" +
    //     "कथा सांगूनी देते शिदोरी संस्कारांची नी संस्कृतीची\n" +
    //     "तिच्यात वसते सरस्वती नि भगवती\n" +
    //     "तिच लक्ष्मी, तिच जननी पार्वती\n" +
    //     "रिद्धी सिद्धी विद्या ती\n" +
    //     "समजून घेणारी असते ती ताई\n" +
    //     "आधार जीवनाचा देण्या सरसावते मुलगी\n" +
    //     "अंगाइचे स्वर मनीचे\n" +
    //     "आनंदाचे लोट मायेचे\n" +
    //     "संगीताचे झंकार सुखाचे\n" +
    //     "रूप मुलीचं यश विश्वाचे\n" +
    //     "तूच देवकी नि कौसल्या, प्रल्हादाची कयाधू आई\n" +
    //     "अहिल्या तू, होळकरांची तू, छत्रपतींची जिजाबाई\n" +
    //     "शिक्षणाची क्रांती तू, ज्ञानाची तू सावित्री\n" +
    //     "रमाई तू भिमरायाची, सत्यवानाची सावित्री\n" +
    //     "तुझ्याच ठायी वसती संत सखू अन् बहीणाबाई\n" +
    //     "ज्ञानाची तू मुक्ताई, तूच विठ्ठलाची जनाबाई\n" +
    //     "रुक्मिणी तू सावळ्याची , रामप्रभु ची सीता तू\n" +
    //     "विश्व समृद्धी ठायी ठायी वसते\n" +
    //     "मुलगी म्हणजे मुलगीच असते",
    // },
  ];

  const favoritePoems = [
    {
      id: 1,
      title: "असे जगावे छाताडावर",
      author: "गुरु ठाकूर",
      content:
        "असे जगावे छाताडावर आव्हानाचे लावुन अत्तर\n" +
        "नजर रोखुनी नजरे मध्ये आयुष्याला द्यावे उत्तर\n\n" +
        "नको गुलामी नक्षत्रांची भीती आंधळी ताऱ्यांची\n" +
        "आयुष्याला भिडतानाही चैन करावी स्वप्नांची\n" +
        "असे दांडगी ईछा ज्याची मार्ग तयाला मिळती सत्तर\n" +
        "नजर रोखुनी नजरे मध्ये आयुष्याला द्यावे उत्तर\n\n" +
        "पाय असावे जमिनीवरती  कवेत अंबर घेताना\n" +
        "हसू असावे ओठांवरती काळीज काढुन देताना\n" +
        "संकटासही ठणकावुन सांगावे आता ये बेहत्तर\n" +
        "नजर रोखुनी नजरे मध्ये आयुष्याला द्यावे उत्तर\n\n" +
        "करुन जावे असेही काही दुनियेतुनी या जाताना\n" +
        "गहिवर यावा जगास सा-या निरोप शेवट देताना\n" +
        "स्वर कठोर त्या काळाचाही क्षणभर व्हावा कातर कातर\n" +
        "नजर रोखुनी नजरे मध्ये आयुष्याला द्यावे उत्तर",
    },
    {
      id: 2,
      title: "विझलो आज जरी मी",
      author: "सुरेश भट",
      content:
        "विझलो आज जरी मी,\n" +
        "हा माझा अंत नाही.....\n" +
        "पेटेन उद्या नव्याने,\n" +
        "हे सामर्थ्य नाशवंत नाही\n\n" +
        "छाटले जरी पंख माझे,\n" +
        "पुन्हा उडेन मी.\n" +
        "अडवू शकेल मला,.\n" +
        "अजुन अशी भिंत नाही\n\n" +
        "माझी झोपडी जाळण्याचे,\n" +
        "केलेत कैक कावे..\n" +
        "जळेल झोपडी अशी,\n" +
        "आग ती ज्वलंत नाही..\n\n" +
        "रोखण्यास वाट माझी,\n" +
        "वादळे होती आतूर..\n" +
        "डोळ्यांत जरी गेली धूळ,\n" +
        "थांबण्यास उसंत नाही..\n\n" +
        "येतील वादळे, खेटेल तुफान,\n" +
        "तरी वाट चालतो..\n" +
        "अडथळ्यांना भिवून अडखळणे,\n" +
        "पावलांना पसंत नाही..",
    },
  ];

  // Handle speech synthesis
  const toggleSpeech = () => {
    if (!selectedPoem) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(selectedPoem.content);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  // Handle poem selection
  const handlePoemSelect = (poem) => {
    setSelectedPoem(poem);
  };

  // Handle back to list
  const handleBackToList = () => {
    setSelectedPoem(null);
  };

  // Handle next poem
  const handleNextPoem = () => {
    const poems = activeTab === "my-poems" ? myPoems : favoritePoems;
    const currentIndex = poems.findIndex((p) => p.id === selectedPoem.id);
    const nextIndex = (currentIndex + 1) % poems.length;
    setSelectedPoem(poems[nextIndex]);
  };

  // Handle previous poem
  const handlePrevPoem = () => {
    const poems = activeTab === "my-poems" ? myPoems : favoritePoems;
    const currentIndex = poems.findIndex((p) => p.id === selectedPoem.id);
    const prevIndex = (currentIndex - 1 + poems.length) % poems.length;
    setSelectedPoem(poems[prevIndex]);
  };

  // Clean up speech synthesis when modal closes
  useEffect(() => {
    synthRef.current = window.speechSynthesis;

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-poem" onClick={onClose}>
      <div
        className="modal-container-poem"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          {selectedPoem ? (
            <button className="back-button" onClick={handleBackToList}>
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Back to List</span>
            </button>
          ) : (
            <div className="tabs">
              <button
                className={`tab ${activeTab === "my-poems" ? "active" : ""}`}
                onClick={() => setActiveTab("my-poems")}
              >
                My Poems
              </button>
              <button
                className={`tab ${
                  activeTab === "favorite-poems" ? "active" : ""
                }`}
                onClick={() => setActiveTab("favorite-poems")}
              >
                Favorite Poems
              </button>
            </div>
          )}
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-main">
          {selectedPoem ? (
            <div className="poem-content">
              <h2 className="poem-title">{selectedPoem.title}</h2>
              {selectedPoem.author && (
                <p className="poem-author">by {selectedPoem.author}</p>
              )}
              <div className="poem-text" style={{ fontSize: `${fontSize}px` }}>
                {selectedPoem.content.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="poem-list">
              <h3 className="list-title">
                {activeTab === "my-poems" ? "My Poems" : "Favorite Poems"}
              </h3>
              <ul>
                {(activeTab === "my-poems" ? myPoems : favoritePoems).map(
                  (poem) => (
                    <li
                      key={poem.id}
                      className="poem-item"
                      onClick={() => handlePoemSelect(poem)}
                    >
                      {poem.title}
                      {poem.author && (
                        <span className="author">by {poem.author}</span>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>

        {selectedPoem && (
          <div className="modal-footer">
            <button className="footer-button" onClick={handlePrevPoem}>
              Prev
            </button>
            <button
              className={`footer-button ${isSpeaking ? "active" : ""}`}
              onClick={toggleSpeech}
            >
              <FontAwesomeIcon icon={faVolumeUp} />
              <span>{isSpeaking ? "Stop" : "Read"}</span>
            </button>
            <div className="font-controls">
              <FontAwesomeIcon icon={faFont} className="font-icon" />
              <button
                className="font-button"
                onClick={() => setFontSize((prev) => Math.max(12, prev - 2))}
              >
                A-
              </button>
              <button
                className="font-button"
                onClick={() => setFontSize((prev) => Math.min(28, prev + 2))}
              >
                A+
              </button>
            </div>
            <button className="footer-button" onClick={handleNextPoem}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProfessionalCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="professional-card"
        onClick={() => {
          console.log("open");
          setIsModalOpen(true);
        }}
      >
        <div className="card-icon">
          <FontAwesomeIcon icon={faFeatherAlt} size="2x" />
        </div>
        <h3>Poems</h3>
        <p>
          I enjoy reading and writing poems, and exploring different poetic
          styles to understand how emotions and ideas are expressed through
          language.
        </p>
        <span className="read-instruction">
          Read My Poems →
        </span>
      </div>
      <PoemsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ProfessionalCard;
