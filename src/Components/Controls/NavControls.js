import React from 'react'

const NavControls = () => {
    return (
        <div className='NavControl'>

            <div className='SearchBox'>
                <input type="text"></input>
                <button>Buscar</button>
            </div> 
            
            <button className='btnAdd'>Agregar</button>
        </div>
    )
}
export default NavControls
