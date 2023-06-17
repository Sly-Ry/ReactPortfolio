import { NavLink } from "react-router-dom";
import DropLayout from "./DropLayout"

export function NavLayout() {  

    return (
        <>
            <header>
                <nav className="navbar">
                    <ul className="links">
                        <li>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">PROJECTS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </nav>
                <DropLayout />
            </header>
        </>
    )
}



