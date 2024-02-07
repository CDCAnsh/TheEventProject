import { useState } from 'react'
import MainPage from './components/MainPage';
import {Routes,Route} from 'react-router-dom'
import RequestEvent from './components/RequestEvent'
import Details from './components/Details';


function App() {

  return (
    <div className=' bg-[#fefeff]'>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/requestEvent' element={<RequestEvent/>} ></Route>
        </Routes>
        {/* <Details></Details> */}
    </div>
  )
}

export default App
