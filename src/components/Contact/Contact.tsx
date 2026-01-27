import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import githubIcon from "../../assets/github.svg";
import telegramIcon from "../../assets/telegram.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
      </header>
      <div className="contacts">
        <div className="email-box">
          <a href="mailto:shubhamsingh7236002388@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:shubhamsingh7236002388@gmail.com">shubhamsingh7236002388@gmail.com</a>
        </div>
      </div>
      <div className="social-links-container">
        <a href="https://github.com/Shubhams872-spec" target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub" /></a>
        <a href="https://t.me/shubham_zenith" target="_blank" rel="noreferrer"><img src={telegramIcon} alt="Telegram" /></a>
      </div>
      <div className="small-form">
        <form action="https://formspree.io/f/YOUR_ID" method="POST">
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows={3} required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </Container>
  )
}
