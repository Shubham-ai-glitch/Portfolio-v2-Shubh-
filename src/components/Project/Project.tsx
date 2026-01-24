import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Shubhams872-spec" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio v2 - Cybersecurity Style</h3>
              <p>Personal portfolio built with React and TypeScript, featuring a custom hacking-themed UI and secure contact forms.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Netlify</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        
        {/* Aap yahan naye projects ke liye aur blocks add kar sakte hain */}
      </div>
    </Container>
  );
}
