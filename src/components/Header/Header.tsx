import { Container } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'

export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleActive() { setActive(!isActive) }
  function closeMenu() { setActive(false) }

  return (
    <Container className="header-fixed">
      <BrowserRouter>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Shubham "}</span>
          <span>{" Singh/>"}</span>
        </HashLink>
        <nav className={isActive ? 'active' : ''}>
          <HashLink smooth to="#home" onClick={closeMenu}>Home</HashLink>
          <HashLink smooth to="#about" onClick={closeMenu}>About Me</HashLink>
          <HashLink smooth to="#project" onClick={closeMenu}>Project</HashLink>
          <HashLink smooth to="#contact" onClick={closeMenu}>Contact</HashLink>
          <a href="https://ig.me/m/Shubham.zenith_?text=Hi%20Shubham,%20I%20reached%20you%20through%20your%20portfolio!" target="_blank" rel="noreferrer" className="button">Instagram</a>
        </nav>
        <div aria-expanded={isActive} className={isActive ? 'menu active' : 'menu'} onClick={toggleActive}></div>
      </BrowserRouter>
    </Container>
  )
}
