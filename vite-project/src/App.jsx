import { useState } from 'react'
import MainPage from './components/MainPage';
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <div className=' bg-gradient-to-r from-[#eaf3fd] via-[#fdfdfd] to-[#ffebdc] lg:w-full w-fit'>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
        </Routes>
    </div>
  )
}

export default App
