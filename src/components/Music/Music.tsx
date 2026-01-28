import { useState, useRef } from 'react'
import styled from 'styled-components'

export function Music() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => console.log("Audio play error"))
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <MusicBox>
      {/* Ye path ab seedha tumhari uploaded file se connect ho jayega */}
      <audio ref={audioRef} loop src="/assets/bg-sound.mp3" />
      <button onClick={toggleMusic}>
        {isPlaying ? '🔇 Stop Music' : '🔊 Play Music'}
      </button>
    </MusicBox>
  )
}

const MusicBox = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  button { 
    background: #23ce6b; 
    border: none; 
    padding: 0.8rem 1.2rem; 
    border-radius: 50px; 
    font-weight: bold; 
    cursor: pointer; 
    color: white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }
`
