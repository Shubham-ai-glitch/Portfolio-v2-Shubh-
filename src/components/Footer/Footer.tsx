import { Container } from './styles'
import githubIcon from '../../assets/github.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://shubham-singh-kanpur.netlify.app/" className="logo">
        <span>shubham-singh-kanpur</span>
      </a>
      <div>
        <p>Made with 💀 by Shubham Singh</p>
      </div>
      <div className="social-media">
        <a href="https://github.com/Shubhams872-spec" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}
