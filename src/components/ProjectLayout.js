import { faJar, faCloudSun, faCalculator, faCode, faMugHot } from '@fortawesome/free-solid-svg-icons'

import photo1 from '../assets/images/pickleSite.png'
import photo3 from '../assets/images/calculator.png'
import theatre from '../assets/images/theatre.jpg';
import red from '../assets/images/red.jpg'

import { Project } from '../pages/Project'

export function ProjectLayout() {
    return (
        <>
            <div className="container">
                <div className="proj_row row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <Project 
                            id="red-card"
                            href="https://sly-ry.github.io/red-deck/"
                            src={red}
                            alt="a cup of hot coffee"
                            iconId="mug"
                            icon={faMugHot}
                            title="The Red Deck"
                            text="The main site for reknown cafe company that brews dream to life designed for desktop and mobile optimized for better user experience."
                            stack1="React"
                            stack2="Bootstrap"
                            code={faCode}
                            codeHref="https://github.com/Sly-Ry/red-deck/"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Project 
                            id="theatre-card"
                            href="https://sly-ry.github.io/harper-house/"
                            src={theatre}
                            alt="a woman performing onstage"
                            iconId="cloud"
                            icon={faCloudSun}
                            title="Harper House"
                            text="A template website for an up-and-coming theatre company designed for desktop and mobile usage. Equipped with advanced nagivations and optimized onloading for better user experience."
                            stack1="React"
                            stack2="Bootstrap"
                            code={faCode}
                            codeHref="https://github.com/Sly-Ry/harper-house"
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
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