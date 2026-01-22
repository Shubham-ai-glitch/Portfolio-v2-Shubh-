import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

export function Contact(){
  return(
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>Interested in working together or have a query?</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:shubhamsingh9415191609@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:shubhamsingh9415191609@gmail.com">shubhamsingh9415191609@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919415181609"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919415181609">(+91) 9415181609</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
