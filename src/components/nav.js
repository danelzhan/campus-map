import { useRef, useEffect } from 'react'
import friends from '../icons/friends.svg'
import compass from '../icons/compass.svg'
import event from '../icons/event.svg'

const NavBar= () => {
    return (
        <div id="nav">

            <div class="nav_button">
                <img src={friends}/>
            </div>
            <div class="nav_button">
                <img src={compass}/>
            </div>
            <div class="nav_button">
                <img src={event}/>
            </div>


        </div>
    );
};

export default NavBar;