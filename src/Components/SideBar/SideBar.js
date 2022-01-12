import React from 'react'
import {AiFillHome,AiOutlineInbox} from 'react-icons/ai'
import {HiTemplate} from 'react-icons/hi'
import {BiTransferAlt} from 'react-icons/bi'

const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className='logoBox'>
                <AiFillHome className='Icon'/>
            </div>

            <ul className='Menu'>
                <li><HiTemplate/></li>
                <li><AiOutlineInbox/></li>
                <li><BiTransferAlt/></li>
            </ul>


        </div>
    )
}

export default SideBar
