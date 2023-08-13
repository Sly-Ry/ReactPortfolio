import { faJar, faCloudSun, faCalculator, faCode } from '@fortawesome/free-solid-svg-icons'

import photo1 from '../assets/images/pickleSite.png'
import photo2 from '../assets/images/quote.png'
import photo3 from '../assets/images/calculator.png'
import theatre from '../assets/images/theatre.jpg'

import { Project } from '../pages/Project'

export function ProjectLayout() {
    return (
        <>
            <div className="container">
                <div className="proj_row row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <Project 
                            id="theatre-card"
                            href="https://sly-ry.github.io/harper-house/"
                            src={theatre}
                            alt="a woman performing onstage"
                            iconId="jar"
                            icon={faJar}
                            title="Harper's House"
                            text="A template website for an up-and-coming theatre company."
                            stack1="React"
                            stack2="Bootstrap"
                            code={faCode}
                            codeHref="https://github.com/Sly-Ry/harper-house"
                        />
                        <Project 
                            id="pickle-card"
                            href="https://sly-ry.github.io/Product-Landing-Page/"
                            src={photo1}
                            alt="Assorted variety of pickles"
                            iconId="jar"
                            icon={faJar}
                            title="Picklers' Pickles"
                            text="Picklers' Pickles is a PWA for lovers of all things pickled where users can experience media tailored to specific pickle styles."
                            stack1="HTML"
                            stack2="Bootstrap"
                            code={faCode}
                            codeHref="https://github.com/Sly-Ry/Product-Landing-Page"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Project 
                            href="https://sly-ry.github.io/random-quote-generator/"
                            src={photo2}
                            alt="An inspirational quote."
                            iconId="cloud"
                            icon={faCloudSun}
                            title="Random Quote Generator"
                            text="A simple random quote generator made with React and Bootstrap with functionality to post generated quote via Twitter and Tumblr."
                            stack1="React"
                            stack2="Bootstap"
                            code={faCode}
                            codeHref="https://github.com/Sly-Ry/random-quote-generator"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Project 
                            href="https://sly-ry.github.io/Product-Landing-Page/"
                            src={photo3}
                            alt="A customizable calculator"
                            iconId="calculator"
                            icon={faCalculator}
                            title="Idol Calculator"
                            text="Idol Calculator is a simple calculator app with theme changing functionality based the user's desired Idol group."
                            stack1="React"
                            stack2="Bootstrap"
                            code={faCode}
                            codeHref="https://github.com/Sly-Ry/Idol-Calculator"
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}