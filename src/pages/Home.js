import React from 'react'
import Category from './Category'
import Schedule from './Schedule'
import "./Home.css"



function Home() {
  return (
    <>
   <div className='home'>
   <Category />
   </div>
   
   <div className='home2'>
   <Schedule />
   </div>
   </>
  )
}

export default Home