import '../styles/Contact.css'
import "bootstrap-icons/font/bootstrap-icons.css";
export function Contact() {

    const disableScrolling = (e) => {
        e.target.blur()

        e.noScroll()

        setTimeout(() => {
            e.target.focus()
        }, 0)
    }
      
    return (
        <>
        <div className="Contact d-flex justify-content-center">
            <div className="container">
                    <div className="cont_box row">
                        <div className="c_box col-12 col-md-7">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">
                                    Contact Number
                                </label>
                                <input type="number" className="form-control" id="number" placeholder="#" onWheel={disableScrolling}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea className="form-control" id="message" rows="7"></textarea>
                            </div>
                            <button type='submit' className='btn btn-primary'>Send</button> 
                        </div>
                        <div className="info_box col-md-5">
                            <h1>Contact Me</h1>
                            <hr/>
                            <div className="mt-4">
                                <div className="d-flex align-items-center">
                                    <div className='icon_envelope'>
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <div className='c_info d-flex'>
                                        <label htmlFor="email" className="email">
                                            Email: 
                                        </label>
                                        <p>ryan.williams93@aol.com</p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className="mt-4">
                                <div className="d-flex align-items-center">
                                    <div className='icon_linkedin'>
                                        <i className="bi bi-linkedin"></i>
                                    </div>
                                    <div className='c_info d-flex'>
                                        <label htmlFor="email" className="email">
                                            LinkedIn:
                                        </label>
                                        <p>https://www.linkedin.com/in/ryan-williams-338334224/</p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className="mt-4">
                                <div className="d-flex align-items-center">
                                    <div className='icon_person'>
                                        <i className="bi bi-person-vcard-fill"></i>
                                    </div>
                                    <div className='c_info d-flex'>
                                        <label htmlFor="email" className="email">
                                            Portfolio:
                                        </label>
                                        <p>hello</p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}