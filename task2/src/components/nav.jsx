import React from 'react'
import {Outlet,Link} from 'react-router-dom'

export default function Nav(){
    return(
        <div>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li> 
            </ul>
            <Outlet/>
        </div>
    )
}