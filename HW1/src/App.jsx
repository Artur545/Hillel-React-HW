import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'

function App() {

  return (
    <div>
      <h1>My first React project</h1>

      <Button type="submit" text="Submit" />
    </div>
  )
}

export default App;
