import React from 'react'
import { Link,Outlet } from "react-router-dom";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../css/home.css";
import { YesNoBox } from './checkbox/YesNoBox';
export const Home = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
   <>
     <div className='con1' data-aos="fade-rightn">
      <div className='con'>
        <ul>
          <li>Train Name:{}</li>
          <li>Departare Time:{}</li>
          <li>Seat Availablity:{}</li>
          <li>Sleeper:{}</li>
          <li>Ac:{}</li>
          <li>Sleeper Price:{}</li>
          <li>AC Price:{}</li>
        </ul>
      </div>
     </div>
     
    <Outlet/>
   </>

  )
}
