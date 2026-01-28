import { Container } from "./styles";
import ShubhamImg from "../../assets/shubham.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1*1000}>
          <p>Hello! I'm Shubham Singh, a Frontend Developer and 11th-grade NEET aspirant from Kanpur. My life is a blend of Biology and Code. While I study for medical, my passion lies in Hacking and Cybersecurity.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2*1000}>
          <p>I specialize in React and TypeScript. I'm currently building "Jarvis", an AI assistant. I love exploring system vulnerabilities and building secure, fast web interfaces.</p>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <img src={ShubhamImg} alt="Shubham Singh" />
      </div>
    </Container>
  )
}
