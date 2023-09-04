import './Header.css';

import { NavLink } from "react-router-dom";

export function Header() {  

    return (
        <>
            <header className='dja fixed-top' style={{height: 80}}>
                <nav className="row djea tada-sm">
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
                <div className="row dja hidden-sm">
                    <h1>hello</h1>
                </div>
            </header>
        </>
    )
}



