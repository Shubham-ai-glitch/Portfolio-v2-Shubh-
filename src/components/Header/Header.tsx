import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { Container } from './styles'
import { useState } from 'react'

export function Header() {
  const [isActive, setActive] = useState(false)
  const toggleActive = () => setActive(!isActive)
  const closeMenu = () => setActive(false)

  return (
    <Container className="header-fixed">
      <Router>
        {/* Logo Purane Style Mein */}
        <HashLink smooth to="#home" className="logo">
          <span> Shubham</span>
          <span> Singh</span>
        </HashLink>

        <input className="menu-btn" type="checkbox" id="menu-btn" onClick={toggleActive} />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>Home</NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>About Me</NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>Project</NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>Contact</NavHashLink>
          {/* Resume Link */}
          <a href="https://drive.google.com/file/d/1t-0UB9Lswk4KDu2El6-GO-0Swh90ZbAF/view?usp=drivesdk" 
             target="_blank" rel="noreferrer" className="button">
            Resume
          </a>
        </nav>
      </Router>
    </Container>
  )
}
