import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { useState,useEffect } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import "./App.css";

function Main() {
  const[loading,setloading]=useState(false)
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },3000)
  },[])
  return (
    <>
      <div className='app'>
      {
        loading?  <SyncLoader
        color='blue'
        loading={loading}
       
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />: <Routes>
      <Route path='/' element={<Home/>} />
   
      
    </Routes>
      }
      </div>
     
    </>
     
   
  );
}

export default Main;
