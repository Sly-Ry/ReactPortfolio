import './FormComponent.css';

import { FormSubmitComponent } from "./FormComponents/FormSubmitComponent";

export function FormComponent() {
    return (
        <>
            <form className="col-12 col-sm-10 col-md-8 col-lg-5 p-4" action="https://formsubmit.co/0b597d519a913e26543ffbfe54a6fa12" method="POST">
                <FormSubmitComponent />
                {/* Form Info */}
                <div className="col-12 col-lg-10 mb-3 p-2">
                    <label htmlFor="name" className="form-label fs-2 text-uppercase">
                        Name
                    </label>
                    <input id="name"  type="text" className="form-control fs-4" name="name" placeholder="RYAN WILLIAMS" required/>
                </div>
                <div className="col-12 col-lg-10 mb-3 p-2">
                    <label htmlFor="email" className="form-label fs-2 text-uppercase">
                        Email
                    </label>
                    <input id="email" type="email" className="form-control fs-4" name="email" placeholder="ryan.williams@93@aol.com" required/>
                </div>
                <div className="col-12 col-lg-10 mb-3 p-2">
                    <label htmlFor="number" className="form-label fs-2 text-uppercase">
                        Phone
                    </label>
                    <input id="number"  type="number" className="form-control fs-4" name="phone&nbsp;number"placeholder="(123) 456-7890" onWheel={(e) => e.target.blur()}/>
                </div>
                <div className="col-12 col-lg-10 mb-3 p-2">
                    <label htmlFor="comment" className="form-label fs-2 text-uppercase">
                        Comment
                    </label>
                    <textarea id="comment" className="form-control fs-4" name='comment' rows="7" placeholder='Hello...'></textarea>
                </div>
                <div className="container text-end">
                    <button type='submit' className='btn col-12 col-sm-4 col-md-3 col-xxl-2'>Send</button> 
                </div>
            </form>
        </>
    )
}