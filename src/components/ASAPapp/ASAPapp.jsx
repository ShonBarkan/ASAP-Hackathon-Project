import React,{useContext} from 'react';
import HomePage from '../homePage/homePage';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import LogIn from '../logIn/logIn.jsx';
import SignUp from '../signUp/signUp.jsx';
import WaitingPage from '../waitingPage.jsx/waitingPage.jsx';
import ZoomArea from '../zoomArea/zommArea.jsx';
import RatePage from '../ratePage/ratePage.jsx';
import { UserContext } from '../context';




const ASAPapp = () => {

  return ( 
    <BrowserRouter>    
          <div className='main'>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/LogIn' element={<LogIn/>}/>
              <Route path='/SignUp' element={<SignUp/>}/>
              <Route path='/WaitingPage' element={<WaitingPage/>}/>
              <Route path='/ZoomArea' element={<ZoomArea/>}/>
              <Route path='/RatePage' element={<RatePage/>}/>
          </Routes>  
          </div> 

       

    </BrowserRouter>
      );
}
 
export default ASAPapp;




