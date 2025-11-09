import { useState } from 'react'
import Intro from './components/Intro/Intro'
import Profile from './components/profile/Profile'
import Skills from './components/skills/Skills'
import Technical from './components/technical/Technical'
import Experience from './components/Intro/experience/experience'


function App() {
  

  return (
    <>
      <div>
        <Intro />
        <Profile />
        <Skills />
        <Technical />
        <Experience />
      </div>
    </>
  )
}

export default App