import React from 'react';

const ProductsForms = () => {
  return (
    <div className='formCont'>
        <h2>Agregar Produto</h2>
        <div className='FormLine'>
            <input className='inputBox' type="text" placeholder='Nombre'/>
            <input className='inputBox' type="text" placeholder='Nombre'/>
        </div>

        <div className='FormLine'>
            <input className='inputBox' type="text" placeholder='Nombre'/>
            <input className='inputBox' type="text" placeholder='Nombre'/>
            <input className='inputBox' type="text" placeholder='Nombre'/>
        </div>
        <div className='FormLine'>
            <input className='inputBox' type="text" placeholder='Nombre'/>
        </div>
    </div>
  )
};

export default ProductsForms;
