
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
        audioRef.current.play().catch(() => alert("Pehle screen par kahin bhi click karein, phir music bajega!"))
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <MusicBox>
      <audio ref={audioRef} loop src="/assets/bg-music.mp3" />
      <button onClick={toggleMusic} className={isPlaying ? 'playing' : ''}>
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
    color: black;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: 0.3s;

    &.playing {
      background: #ffffff;
    }
  }
`
