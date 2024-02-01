
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import NewsItem from './MyComponents/NewsItem';

const App=(props)=> {
  // url=process.env.React_app_News_api;
 const url="e40769afe8494c2daaf4746a5f96c72a"
 const pageSize=9;
 
  const [progress,setProgress]=useState(0)
 

 
  
    
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <Navbar/>
        <Routes>
        {/* <Route path="/" element={<Navbar/>}></Route> */}
        
          <Route exact path="/" element={<News  setProgress={setProgress}key="general" url={url} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News  setProgress={setProgress}key="business" url={url} pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News  setProgress={setProgress}key="entertainment" url={url} pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News  setProgress={setProgress}key="general" url={url} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News  setProgress={setProgress}key="health" url={url} pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News  setProgress={setProgress}key="science" url={url} pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News  setProgress={setProgress}key="sports" url={url} pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News  setProgress={setProgress}key="technology" url={url} pageSize={pageSize} country="in" category="technology"/>}></Route>

          
          </Routes>
          </BrowserRouter>
      </div>
    )
  
}
export default  App