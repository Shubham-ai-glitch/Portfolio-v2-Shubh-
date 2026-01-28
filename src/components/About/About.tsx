import { Container } from "./styles";
// Humne yahan tumhari asli file ka naam "ShubhamSingh.webp" daal diya hai
import ShubhamImg from "../../assets/ShubhamSingh.webp"; 
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hello! I'm Shubham Singh, a Frontend Developer and a dedicated 11th-grade NEET aspirant from Kanpur. My life is a unique blend of medical science and technology.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            Cybersecurity and ethical hacking are my passion. I specialize in React and TypeScript to build secure and fast web interfaces.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Currently, I am working on my personal "Jarvis" AI assistant, aiming to bridge the gap between human health and digital innovation.
          </p>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          {/* Ab ye image perfectly load hogi */}
          <img src={ShubhamImg} alt="Shubham Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
