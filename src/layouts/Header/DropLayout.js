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
            <div className="dropdown hidden">
                <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => {setOpen(false)}} >
                    <i className={`${open ? 'fs-1 fa-solid fa-xmark' : 'fs-1 fa-solid fa-bars'}`}></i>
                </button>
               
                <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} aria-labelledby="dropdownMenuButton1" ref={menuRef}>
                    {/* <div className="logo"><h1 className='fw-bold'>RAW</h1></div> */}
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
        </>
        // <div id="drop" className={`dropdown hidden fixed-top dja ${open ? 'active' : 'inactive'}`} ref={menuRef}>
        //     <button 
        //         id="dropdownMenuButton1"
        //         type="button" 
        //         data-bs-toggle="dropdown" 
        //         className="btn toggle_btn "
        //         aria-expanded="false" 
        //         onClick={() => {setOpen(!open)}}
        //     >
        //         <i className={`${open ? 'fs-1 fa-solid fa-xmark inactive' : 'fs-1 fa-solid fa-bars active'}`}></i>
        //     </button>
        //     <div className={`dropdown-menu dja ${open ? 'active' : 'inactive'}`}>
        //         {open && <div className="logo"><h1 className='fw-bold'>RAW</h1></div>}
        //         <div className='row w-100 text-center'>  
        //             <div className="row py-4">
        //                 <NavLink to="/" onClick={() => {setOpen(!false)}}>HOME</NavLink>
        //             </div>
        //             <div className="row py-4">
        //                 <NavLink to="/about">ABOUT</NavLink>
        //             </div>
        //             <div className="row py-4">
        //                 <NavLink to="/projects">PROJECTS</NavLink>
        //             </div>
        //             <div className="row py-4">
        //                 <NavLink to="/contact">CONTACT</NavLink>
        //             </div>
        //         </div>
        //     </div>
                
        // </div>
    )
}

            