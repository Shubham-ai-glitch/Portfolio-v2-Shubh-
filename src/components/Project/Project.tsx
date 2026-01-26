import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project">
          <header>
            <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links"><a href="https://github.com/Shubhams872-spec" target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub" /></a></div>
          </header>
          <div className="body">
            <h3>AI Assistant (Jarvis Clone)</h3>
            <p>Voice-controlled AI assistant built with Python. It automates tasks and uses NLP for smart responses.</p>
          </div>
        </div>
        <div className="project">
          <header>
            <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </header>
          <div className="body">
            <h3>Image Captioning Model</h3>
            <p>A Deep Learning system (CNN + LSTM) that analyzes images and generates descriptions automatically.</p>
          </div>
        </div>
        <div className="project">
          <header>
            <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </header>
          <div className="body">
            <h3>Vulnerability Scanner</h3>
            <p>Cybersecurity tool to scan network ports and identify security weaknesses.</p>
          </div>
        </div>
        <div className="project">
          <header>
            <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </header>
          <div className="body">
            <h3>Portfolio Website v2</h3>
            <p>Modern React portfolio with SEO and reCAPTCHA integration, built for performance.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
