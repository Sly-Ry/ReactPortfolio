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
            <div className="container" >
                    <form className="cont_box row" action="https://formsubmit.co/0b597d519a913e26543ffbfe54a6fa12" method="POST">
                        {/* Spammer Catch */}
                        <input type='text' name="_honey" style={{display: 'none'}}/>

                        {/* Disable Captcha */}
                        <input type='hidden' name="_captcha" value={'false'}/>

                        <div className="c_box col-12 col-md-7">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input type="text" className="form-control" name="Name" id="name" placeholder="Enter your name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input type="email" className="form-control" name="Email" id="email" placeholder="Enter your email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">
                                    Contact Number
                                </label>
                                <input type="number" className="form-control" name="Number" id="number" placeholder="#" onWheel={disableScrolling}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea className="form-control" name='Message' id="message" rows="7"></textarea>
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
                    </form>
                </div>
            </div>
        </>
    )
}