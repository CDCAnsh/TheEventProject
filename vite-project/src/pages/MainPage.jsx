import {React,useState} from 'react'
import CustomContainer from '../components/core/CustomContainer'
import SideNav from '../components/core/SideNav'
import Card from '../components/common/Card'

const MainPage = () => {

  const [selectedCategory, setSelectedCategory] = useState("Spirituality");

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <div className='flex '>
      <div className='z-20 fixed'>
        <SideNav onCategoryChange={handleCategoryChange}/>
      </div>     
      <div className='flex flex-col gap-3 flex-1 z-10 pl-10 md:ml-0'>
        <CustomContainer/>
        <Card selectedCategory={selectedCategory}/>
      </div>
    </div>
  )
}

export default MainPage