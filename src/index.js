import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DisplayPage from './DisplayPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Detail from './Details';
import Payment from './Payment Component/Payment';
import Login from './Sign&Login/Login';
 import Signup from './Sign&Login/Signup';
 
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<App></App>}/>
      <Route path='/Main' element={<DisplayPage></DisplayPage>}/>
      <Route path='/details' element={<Detail></Detail>}/>
      <Route path='/payment' element={<Payment></Payment>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/signup' element={<Signup></Signup>}/>
      
      

     </Routes>
      

    
    
    
    
    </BrowserRouter>

   
  
);

 