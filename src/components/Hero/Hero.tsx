import React, { useEffect, useRef } from 'react'
import { Container } from './styles'
import ScrollAnimation from "react-animate-on-scroll"

export function Hero({ isDark }: { isDark: boolean }) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaInstance = useRef<any>(null)

  useEffect(() => {
    if (isDark && !vantaInstance.current && (window as any).VANTA) {
      vantaInstance.current = (window as any).VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        backgroundColor: 0x121212,
        color1: 0x23ce6b,
        color2: 0x1d1d1d,
        birdSize: 1.5,
        wingSpan: 30.0,
      })
    } else if (!isDark && vantaInstance.current) {
      vantaInstance.current.destroy()
      vantaInstance.current = null
    }
    return () => { if (vantaInstance.current) vantaInstance.current.destroy() }
  }, [isDark])

  return (
    <Container ref={vantaRef} id="home" style={{background: isDark ? 'transparent' : 'white'}}>
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello, I'm</p>
          <h1>Shubham Singh</h1>
          <h3>Frontend Developer & NEET Aspirant</h3>
          <div className="hero-buttons">
            <a href="#contact" className="button">Contact</a>
            <a href="/Resume_Shubham.pdf" download className="button">Resume</a>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
