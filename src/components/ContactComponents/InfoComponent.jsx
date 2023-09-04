import './InfoComponent.css'

import { InfoLinkComponent } from "./InfoComponents/InfoLinkComponent";

export function InfoComponent() {
    return (
        <>
            <div className="info_box col-12 col-sm-10 col-md-8 col-lg-4 p-5" style={{height: 800}}>
                <h1 className='fw-bold text-center text-uppercase'>Contact Me</h1>
                <hr/>
                <div className="mt-4">
                    <InfoLinkComponent 
                        icon={'icon_envelope'}
                        icon2={"bi bi-envelope-fill"}
                        htmlFor={"email"}
                        title={"Email: "}
                        src={"ryan.williams93@aol.com"}
                    />
                    
                </div>
                 <div className="mt-4">
                    <InfoLinkComponent 
                        icon={'icon_linkedin'}
                        icon2={"bi bi-linkedin"}
                        htmlFor={"linked"}
                        title={"LinkedIn:"}
                        src={"https://www.linkedin.com/in/ryan-williams-338334224/"}
                    />
                </div>
                <div className="mt-4">
                    <InfoLinkComponent 
                        icon={'icon_person'}
                        icon2={"bi bi-person-vcard-fill"}
                        htmlFor={"portfolio"}
                        title={"Portfolio"}
                        src={"https://sly-ry.github.io/React-Portfolio"}
                    />
                </div>
            </div>
        </>
    )
}