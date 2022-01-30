import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import ProductsForms from '../Forms/ProductsForms'

const ModalProduct = ({handleClose}) => {
    return (
        <div className='ModalCont'>
            <div className='ModalBox'>
                <div className='closeIcon'>
                    <AiOutlineClose className='btnClose' onClick={handleClose}/>
                </div>
                <ProductsForms/>
            </div>
        </div>
    )
}

export default ModalProduct
