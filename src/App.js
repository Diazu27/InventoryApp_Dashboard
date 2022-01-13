import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import Products from './Pages/ProductsPage/Products';

import './styles.scss';

const App = () => {
    return (
        <div className='MainCont'>
            
            <SideBar/>
           <div className='SecondCont'>
                <NavBar/>
                <Products/>
           </div>

        </div>
    )
}

export default App

