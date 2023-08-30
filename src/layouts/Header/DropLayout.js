import './DropLayout.css';

import { NavLink } from "react-router-dom";
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
        <div id="drop" className="hidden fixed-top" ref={menuRef}>
            <div className="toggle_btn" onClick={() => {setOpen(!open)}} >
                <i className={`${open ? 'fs-1 fa-solid fa-xmark active' : 'fs-1 fa-solid fa-bars inactive'}`}></i>
            </div>
            <div className={`dropdown dja ${open? 'active' : 'inactive'}`}>
                {open && <div className="logo"><h1 className='fw-bold'>RAW</h1></div>}
                <div className='row w-100 text-center'>  
                    <div className="row py-4">
                        <NavLink to="/">HOME</NavLink>
                    </div>
                    <div className="row py-4">
                        <NavLink to="/about">ABOUT</NavLink>
                    </div>
                    <div className="row py-4">
                        <NavLink to="/projects">PROJECTS</NavLink>
                    </div>
                    <div className="row py-4">
                        <NavLink to="/contact">CONTACT</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

            