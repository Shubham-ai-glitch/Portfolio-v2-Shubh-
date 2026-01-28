import { useState, useRef } from 'react'
import styled from 'styled-components'
// Hum yahan file ko import kar rahe hain kyunki ye src/assets mein hai
import backgroundSound from '../../assets/bg-sound.mp3' 

export function Music() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => alert("Click anywhere on the page first!"))
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <MusicBox>
      <audio ref={audioRef} loop src={backgroundSound} />
      <button onClick={toggleMusic}>{isPlaying ? '🔇 Stop Music' : '🔊 Play Music'}</button>
    </MusicBox>
  )
}

const MusicBox = styled.div`
  position: fixed; bottom: 2rem; right: 2rem; z-index: 1000;
  button { 
    background: #23ce6b; border: none; padding: 0.8rem 1.2rem; 
    border-radius: 50px; font-weight: bold; cursor: pointer; 
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    transition: 0.3s;
    &:hover { transform: scale(1.1); }
  }
`
