import {React,useState} from 'react'
import CustomContainer from '../components/core/CustomContainer'
import Card from '../components/common/Card'

const MainPage = () => {

  return (
      <div className='flex flex-col gap-3 flex-1 z-10 md:ml-0'>
        <CustomContainer/>
        <Card/>
      </div>
  )
}

export default MainPage