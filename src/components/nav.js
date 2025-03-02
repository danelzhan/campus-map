import { useRef, useEffect } from 'react'
import friends from '../icons/friends.svg'
import compass from '../icons/compass.svg'
import event from '../icons/event.svg'

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const NavBar= () => {
    return (
        <div id="nav">

            <div class="nav_button">
                <img src={friends}/>
            </div>
            <Link class="nav_button" to="/home">
                <div >
                    <img src={compass}/>
                </div>
            </Link>
            <div class="nav_button">
                <img src={event}/>
            </div>


        </div>
    );
};

export default NavBar;