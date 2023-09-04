import './Contact.css'

import { ContactLayout } from '../../layouts/Contact/ContactLayout'


export function Contact() {
    return (
        <>
            <div id='contact' className="Contact container-fluid dja" style={{height: '100vh'}}>
                <ContactLayout />
            </div>
        </>
    )
}