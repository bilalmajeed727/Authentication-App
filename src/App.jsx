import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import '../App.css'
import {Routes , Route , Link} from 'react-router-dom'
import Account from './components/Account'


function App() {
  return(
   <>
   <Routes>
    <Route path='/' Component={Register}/>
    <Route path='login' Component={Login}/>
    <Route path='account' Component={Account}/>
   </Routes>

   
   </>
  )
}

export default App
