//  Student1: Netanel Iluz ID: 205856354
//  Student2: Daniel Dabush ID: 316013671

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Dash from './pages/dash'
import AddProduct from "./pages/addproduct";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='element'>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dash/>}/>
            <Route path='/addproduct' element={<AddProduct/>}/>
        </Routes>
    </BrowserRouter>
</div>
);

