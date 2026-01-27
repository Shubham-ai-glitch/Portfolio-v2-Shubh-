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
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>Hello! I'm Shubham Singh, a passionate Frontend Developer and a dedicated NEET aspirant from Kanpur. My journey is a unique blend of medical science and technology. While I am preparing for the medical field, my heart beats for coding and solving complex digital problems.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Cybersecurity and Hacking are my true passions. I love exploring how systems work and how to secure them. This curiosity led me into the world of Web Development, where I specialize in creating fast, responsive, and secure user interfaces using React and TypeScript.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>Currently, I am working on my personal "Jarvis" AI project, aiming to build a smart assistant that can automate tasks efficiently. I believe in continuous learning and pushing the boundaries of what's possible, whether it's in a biology lab or a code editor.</p>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={ShubhamImg} alt="Shubham Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
