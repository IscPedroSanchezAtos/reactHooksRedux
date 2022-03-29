import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data))
  }

  return (
    <form onSubmit={submit}>
      <div>
        <span>
          lala
        </span>
        <input type="text" name="campo"/>
      </div>
      <input type="text" name="campo-2"/>
      <input type="submit" value="enviar" />
    </form>
  )
}

export default App
