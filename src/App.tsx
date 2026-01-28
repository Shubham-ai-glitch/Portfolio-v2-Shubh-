import React, { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Project } from './components/Project/Project'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Music } from './components/Music/Music'

function App() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <>
      <GlobalStyle isDark={isDark} />
      {/* Header ko theme function aur state bhej rahe hain */}
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      
      {/* ERROR YAHAN THA: Hero ko isDark state bhejni zaroori hai */}
      <Hero isDark={isDark} />
      
      <About />
      <Project />
      <Contact />
      <Footer />
      <Music />
    </>
  )
}

export default App
