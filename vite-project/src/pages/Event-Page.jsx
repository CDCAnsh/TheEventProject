import {React,useState} from 'react'
import EventSearchBar from './../components/core/EventSearchBar';
import CardContainer from '../components/common/CardContainer';

const EventPage = () => {

  return (
      <div className='flex flex-col gap-3 flex-1 z-10 md:ml-0'>
        <EventSearchBar/>
        <CardContainer/>
      </div>
  )
}

export default EventPage;