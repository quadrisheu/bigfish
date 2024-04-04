import React from 'react'
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './component/Main'

import Navbar from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { container, row, col } from 'react-bootstrap'

const App = () => {
  
    return (
      <div className='container-fluid'>

        <div className='row'>
            <div className='col-md-2 bar'>
                <Navbar />
                
            </div>

            <div className='col-md-10 main'>
                <Main />
            </div>
        </div>

         
        
         
        
         
      </div>
  )
}

export default App
