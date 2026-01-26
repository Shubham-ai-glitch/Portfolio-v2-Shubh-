import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'
import telegramIcon from '../../assets/telegram.svg'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello, I'm</p>
        </ScrollAnimation>
        <h1>Shubham Singh</h1>
        <h3>Frontend Developer & Hacking Enthusiast</h3>
        <p className="small-resume">11th Grade Student | NEET Aspirant | Kanpur</p>
        <div className="social-media">
          <a href="https://github.com/Shubhams872-spec" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" style={{width: '50px'}} />
          </a>
          <a href="https://www.instagram.com/Shubham.zenith_/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" style={{width: '50px'}} />
          </a>
          <a href="https://t.me/shubham_zenith" target="_blank" rel="noreferrer">
            <img src={telegramIcon} alt="Telegram" style={{width: '50px'}} />
          </a>
        </div>
      </div>
    </Container>
  )
}
