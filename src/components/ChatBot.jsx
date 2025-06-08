import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../static/css/ChatBot.css";

export default function ChatBot() {
  const [chatBotDisplay, setChatBotDisplay] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleChatIconClick = () => {
    setChatBotDisplay(!chatBotDisplay);
  };

  const handleClose = () => {
    setChatBotDisplay(false);
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage = { text: inputValue, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Send to backend
      const response = await axios.post(
        "http://localhost:5000/api/chat",
        { message: inputValue },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Add bot response
      const botMessage = { text: response.data.answer, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API Error:", error);
      const errorMessage = {
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="chatbot-icon">
        <button onClick={handleChatIconClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        </button>
      </div>

      {chatBotDisplay && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Onkar<span style={{color:'red',fontSize:'10px',padding:'1rem'}}>(Under Development)</span></h3>
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.isUser ? "user-message" : "bot-message"
                }`}
              >
                {message.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot-message loading">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Onkar..."
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="20px"
                height="20px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
