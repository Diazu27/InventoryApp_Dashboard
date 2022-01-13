import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const ModalProduct = ({handleClose}) => {
    return (
        <div className='ModalCont'>
            <div className='ModalBox'>
                <div className='closeIcon'>
                    <AiOutlineClose className='btnClose' onClick={handleClose}/>
                </div>
            </div>
        </div>
    )
}

export default ModalProduct
