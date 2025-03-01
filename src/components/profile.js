import { useRef, useEffect } from 'react'
import icon from '../icons/account_circle.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const ProfileButton= () => {
    return (
        <div id="profile_button">

            <Link to="/profile"><img src={icon} /></Link>

        </div>
    );
};

export default ProfileButton;