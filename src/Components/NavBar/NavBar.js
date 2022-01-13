import React from 'react'
import {BiUser, BiLogOut} from 'react-icons/bi'

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='userBox'>
                <BiUser className='userIcon'/>
                <span>Andrés Díaz</span>
            </div>
            <BiLogOut className="logoutButton" />
        </div>
    )
}

export default NavBar
