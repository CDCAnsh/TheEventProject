import { useState } from 'react'
import MainPage from './pages/MainPage';
import {Routes,Route} from 'react-router-dom'
import Details from './constants/details.json';
import RequestEvent from './components/requestpage/RequestEvent';


function App() {

  return (
    <div className=' bg-[#fefeff]'>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/requestEvent' element={<RequestEvent/>}></Route>
        </Routes>
    </div>
  )
}

export default App
