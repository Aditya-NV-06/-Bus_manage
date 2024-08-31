import { useState } from 'react'
import './App.css'
import Navbar from "./assets/Navbar.jsx"
function App() {
  

  return (
    <>


     <Navbar/>

     <main>
      <div className="main-container">
        <div className="container container1">
          <h2>Total number of Buses</h2>

        </div>
        <div className=" container container2">
          <h2>No. of Buses Active</h2>
        </div>
        <div className=" container container3">
          <h2>Routes</h2>
        </div>
        <div className="container container4">
          <h2></h2>
        </div>
        </div>
     </main>



     <footer>

     </footer>

    </>
  )
}

export default App
