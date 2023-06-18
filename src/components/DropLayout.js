import { NavLink } from "react-router-dom"
import { useEffect, useState, useRef } from "react";

export default function DropLayout() {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <div className="menu_container" ref={menuRef}>
            {open && <div className="logo"><h1>RAW</h1></div>}
            <div className="toggle_btn" onClick={() => {setOpen(!open)}} >
                <i className={`${open ? 'fa-solid fa-xmark active' : 'fa-solid fa-bars inactive'}`}></i>
            </div>

            <div className={`dropdown_menu ${open? 'active' : 'inactive'}`}>
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
            </div>
        </div>
    )
}

            