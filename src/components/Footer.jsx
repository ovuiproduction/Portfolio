import chatgpt_logo from "../static/images/chatgpt_logo.png";
import grok_logo from "../static/images/grok_logo.png";
import deepseek_logo from "../static/images/deepseek_logo.png";

export default function Footer(){
    return(
        <>
        <footer className="footer">
        <p>© 2023 Onkar Waghmode. All rights reserved.</p>
        <div className="credits-container">
          <p className="credits">
            Thanks to
            <span className="ai-tools">
              <img src={grok_logo} alt="Grok" className="ai-logo" />
              <img src={chatgpt_logo} alt="ChatGPT" className="ai-logo" />
              <img src={deepseek_logo} alt="DeepSeek" className="ai-logo" />
            </span>
            for their assistance
          </p>
        </div>
      </footer>
        </>
    )
}