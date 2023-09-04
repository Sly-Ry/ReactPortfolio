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
        <>  
            <div id="drop" className="navbar fixed-bottom hidden-sm">
                <div className="dropup dja w-100">
                    <button className="drop-btn btn hidden-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => {setOpen(false)}} >
                        <i className={`${open ? 'fa-solid fa-xmark active ' : 'fa-solid fa-bars inactive'}`}></i>
                    </button>
                    <div className="dropdown-menu container-fluid text-center rounded-0" ref={menuRef} style={{height: '58rem'}}>
                        <div className='drop-links row h-100 dja'>
                            <div className="row">
                                <NavLink to="/">HOME</NavLink>
                            </div>
                            <div className="row">
                                <NavLink to="/about">ABOUT</NavLink>
                            </div>
                            <div className="row">
                                <NavLink to="/projects">PROJECTS</NavLink>
                            </div>
                            <div className="row">
                                <NavLink to="/contact">CONTACT</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

            