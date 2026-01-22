import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>www.shubham</span>
        <span>singh</span>
      </a>
      <div><p>Made with <img src={reactIcon} alt="React" /></p></div>
      <div className="social-media">
        <a href="https://github.com/Shubhams872-spec" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=%2B919415181609" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="https://t.me/Shubhams872" target="_blank" rel="noreferrer">
          <img src={telegram} alt="Telegram" />
        </a>
        <a href="https://www.instagram.com/Shubham.zenith_/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
