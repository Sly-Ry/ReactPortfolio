import './Header.css';

import { NavLink } from "react-router-dom";
import DropLayout from "./DropLayout";

export function Header() {  

    return (
        <>
            <header className='container-fluid dja' style={{height: 70}}>
                <nav className="row">
                    <div className="link col-3">
                        <NavLink to="/">HOME</NavLink>
                    </div>
                    <div className="link col-3">
                        <NavLink to="/about">ABOUT</NavLink>
                    </div>
                    <div className="link col-3">
                        <NavLink to="/projects">PROJECTS</NavLink>
                    </div>
                    <div className="link col-3">
                        <NavLink to="/contact">CONTACT</NavLink>
                    </div>
                </nav>
                <DropLayout />
            </header>
        </>
    )
}



