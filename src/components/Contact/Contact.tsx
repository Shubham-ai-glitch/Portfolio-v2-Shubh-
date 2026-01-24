import emailIcon from "../../assets/email-icon.svg";
import { Container } from "./styles";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>If you saw my portfolio and want to talk, don't hesitate!</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:shubhamsingh9415191609@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:shubhamsingh9415191609@gmail.com">shubhamsingh9415191609@gmail.com</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}
