import { useState } from 'react'
import MainPage from './components/MainPage';
import {Routes,Route} from 'react-router-dom'
import RequestEvent from './components/RequestEvent'


function App() {

  return (
    <div className=' bg-[#fefeff]'>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/requestEvent' element={<RequestEvent/>} ></Route>
        </Routes>
    </div>
  )
}

export default App
