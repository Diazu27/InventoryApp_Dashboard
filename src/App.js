import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import { DashboardPage } from './Pages/DashboardPage';
import ProductsPage from './Pages/ProductPage';
import StockPage from './Pages/StockPage';

import './styles.scss';

const App = () => {
    return (
        <div className='MainCont'>
            
        <BrowserRouter>
           <SideBar/>
           <div className='SecondCont'>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<DashboardPage/>}/>
                        <Route path="/products" element={<ProductsPage/>}/>
                        <Route path="/stock" element={<StockPage/>}/>
                    </Routes>
           </div>
        </BrowserRouter>

        </div>
    )
}

export default App

