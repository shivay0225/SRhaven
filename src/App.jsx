
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Signup from "./auth/signup"
import Signin from './auth/login'

function App() {


  return (
    <>

   
          <BrowserRouter>
 

        <Routes>
          
          <Route path='/' element={<Home/>} />
      
          <Route path='signup' element={<Signup/>} />
           <Route path='login' element={<Signin/>} />




        </Routes>
    
      </BrowserRouter>

    </>
  )
}

export default App
