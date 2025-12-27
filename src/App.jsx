
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Signup from "./auth/signup"
import Signin from './auth/login'
import Hotelmanali from './pages/hotels/hotelmanali'
import Herosec from './components/herosec'
import Hotelmasoori from './pages/hotels/hotelmasoori'
import HotelDharamshala from './pages/hotels/hoteldhramshalla'
import HotelDhalousie from './pages/hotels/hoteldhalousie'
import HotelNainital from './pages/hotels/hotelnainital'
import HotelDarjleeng from './pages/hotels/hoteldarjleeng'

function App() {


  return (
    <>

   
          <BrowserRouter>
 

        <Routes>
          
           
          <Route path='/' element={<Home/>} />
      
           <Route path='/signup' element={<Signup/>} />
           <Route path='/login' element={<Signin/>} />
            <Route path='/hotelmanali' element={<Hotelmanali/>} />
               <Route path='/hotelmasoori' element={<Hotelmasoori/>} />
                <Route path='/hoteldharamshala' element={<HotelDharamshala/>} />
                 <Route path='/hoteldhalousie' element={<HotelDhalousie/>} />
                  <Route path='/hotelnainital' element={<HotelNainital/>} />
                   <Route path='/hoteldarjleeng' element={<HotelDarjleeng/>} />



        </Routes>
    
      </BrowserRouter>

    </>
  )
}

export default App
