import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
     <header>
        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Routes</a></li>
            <li><a href="#">Ticketing</a></li>
            <li><a href="#">Queries</a></li>
            <li><a href="#">Contact</a></li>
            
          </ul>
          <button className="nav-login">Login</button>
        </nav>
     </header>



     <main>
        <div className="container1">
          <h2>Total number of Buses</h2>

        </div>
        <div className="container2">
          <h2></h2>
        </div>
        <div className="container3">

        </div>
        <div className="container4">

        </div>
     </main>



     <footer>

     </footer>

    </>
  )
}

export default App
