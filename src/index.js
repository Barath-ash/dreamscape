import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DisplayPage from './DisplayPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Detail from './Details';
import Payment from './Payment Component/Payment';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   
     <Routes>
      <Route path='/' element={<App></App>}/>
      <Route path='/Main' element={<DisplayPage></DisplayPage>}/>
      <Route path='/details' element={<Detail></Detail>}/>
      <Route path='/payment' element={<Payment></Payment>}/>
      

     </Routes>

    
    
    
    
    </BrowserRouter>

   
  
);

 