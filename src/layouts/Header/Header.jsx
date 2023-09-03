import './Header.css';

import { NavLink } from "react-router-dom";
import DropLayout from "./DropLayout/DropLayout";

export function Header() {  

    return (
        <>
            <header className='dja fixed-top' style={{height: 90}}>
                <nav className="row  djea tada-sm">
                    <div className="link col-2 dja">
                        <NavLink to="/">HOME</NavLink>
                    </div>
                    <div className="link col-2 dja">
                        <NavLink to="/about">ABOUT</NavLink>
                    </div>
                    <div className="link col-2 dja">
                        <NavLink to="/projects">PROJECTS</NavLink>
                    </div>
                    <div className="link col-2 dja">
                        <NavLink to="/contact">CONTACT</NavLink>
                    </div>
                </nav>    
            </header>
        </>
    )
}



