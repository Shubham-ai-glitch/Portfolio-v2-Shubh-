import { Container } from './styles'
import { useForm } from '@formspree/react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export function Form() {
  const [state, handleSubmit] = useForm('xknkdzob')
  const [isCapatched, setIsCapatch] = useState(false)

  return (
    <Container>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{maxWidth: '100%', overflow: 'hidden'}}>
        <input style={{width: '100%', boxSizing: 'border-box'}} placeholder="Email" id="email" type="email" name="email" required />
        <textarea placeholder="Message" id="message" name="message" required />
        <ReCAPTCHA
          sitekey="6LecIFMsAAAAADVIYVcxBOxNfE5nmaP3nwzrE4fz"
          onChange={() => setIsCapatch(true)}
        />
        <button type="submit" disabled={state.submitting || !isCapatched}>Submit</button>
      </form>
    </Container>
  )
}
