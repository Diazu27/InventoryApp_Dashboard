import React, { useState } from 'react'
import ModalProduct from '../ModalProduct/ModalProduct';

const NavControls = () => {

    const [Modal, setModal] = useState(false);


    const handleModal = ()=>{
        setModal(!Modal);
        console.log(Modal);
    }



    return (
        <div className='NavControl'>
            <div className='SearchBox'>
                <input type="text"></input>
                <button>Buscar</button>
            </div> 
    
            <button className='btnAdd' onClick={handleModal} >Agregar</button>
            {Modal ? <ModalProduct handleClose={handleModal} /> : <></>}
        </div>
    )
}
export default NavControls
