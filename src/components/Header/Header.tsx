import { Container } from './styles'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

// Ye interface batata hai ki Header ko toggle function aur theme state milegi
interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export function Header({ toggleTheme, isDark }: HeaderProps) {
  const [isActive, setActive] = useState(false)

  function toggleActive() {
    setActive(!isActive)
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to="#home" className="logo">
        <span>S</span>
        <span>hubham</span>
      </HashLink>

      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>Home</NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>About me</NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>Project</NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>Contact</NavHashLink>
        
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="theme-button" style={{
          background: 'none',
          border: '1px solid var(--green)',
          color: 'var(--green)',
          padding: '0.5rem 1rem',
          borderRadius: '2rem',
          cursor: 'pointer',
          marginLeft: '1rem'
        }}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>

        <a href="/Resume_Shubham.pdf" download className="button">
          Resume
        </a>
      </nav>

      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={toggleActive}
      ></div>
    </Container>
  )
}
