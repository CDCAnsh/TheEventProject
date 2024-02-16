import { useState } from 'react'
import MainPage from './components/MainPage';
import {Routes,Route} from 'react-router-dom'
import RequestEvent from './components/RequestEvent'
import Details from './components/Details';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className=' bg-[#fefeff]'>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/requestEvent' element={<RequestEvent/>} ></Route>
          <Route path='/details' element={<Details />}></Route>
        </Routes>
    </div>
  )
}

export default App
