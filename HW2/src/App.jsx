import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Form from './components/Form/Form'
import Button from './components/Button/Button'


const handleClickButton1 = (e) => {
        console.log("Click1");
}
    
const handleClickButton2 = (e) => {
        console.log("Click2");
}
    
const handleClickButton3 = (e) => {
        console.log("Click3");
    }


function App() {
  return (
    <div>
      <Header></Header>
      <Input placeholder="Search for the order #" />
      <Form></Form>
      <Button text="Login1" onClick={handleClickButton1} />
      <Button text="Login2" onClick={handleClickButton2} />
      <Button text="Login3" onClick={handleClickButton3} />
    </div>
  )
}

export default App
