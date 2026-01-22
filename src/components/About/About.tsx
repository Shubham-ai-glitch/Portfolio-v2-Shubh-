import { Container } from "./styles";
import ShubhamSingh from "../../assets/ShubhamSingh.webp"; 
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import jsIcon from "../../assets/js-icon.svg"
import reactIcon from "../../assets/react-icon.svg"
import htmlIcon from "../../assets/html-icon.svg"
import cssIcon from "../../assets/css-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>Hi there! I'm Shubham Singh, a developer and hacking enthusiast from Kanpur. I am currently in the 11th grade and passionate about cybersecurity.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>I focus on building secure web applications and exploring ethical hacking. My goal is to become a skilled professional in the tech world.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>Alongside my passion for coding, I am also preparing for NEET.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>11th Grade (Science)</h4>
            <p>Kanpur, Uttar Pradesh</p>
          </div>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability"><img src={htmlIcon} alt="Html" /></div>
          <div className="hability"><img src={cssIcon} alt="Css" /></div>
          <div className="hability"><img src={jsIcon} alt="JavaScript" /></div>
          <div className="hability"><img src={reactIcon} alt="React" /></div>
          <div className="hability"><img src={python} alt="Python" /></div>
          <div className="hability"><img src={java} alt="Java" /></div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={ShubhamSingh} alt="Shubham Singh - Developer Kanpur" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
