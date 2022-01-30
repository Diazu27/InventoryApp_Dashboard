import React from 'react'
import {AiFillHome,AiOutlineInbox} from 'react-icons/ai'
import {HiTemplate} from 'react-icons/hi'
import {BiTransferAlt} from 'react-icons/bi'
import {FaCarrot} from 'react-icons/fa';
import { Link } from 'react-router-dom';
;


const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className='logoBox'>
                <AiFillHome className='Icon'/>
            </div>

            <ul className='Menu'>
                <Link to="/"><HiTemplate/></Link>
                <Link to="/stock"><AiOutlineInbox/></Link>
                <Link to="/products"><BiTransferAlt/></Link>
                <Link to="/products"><FaCarrot/></Link>
            </ul>


        </div>
    )
}

export default SideBar
