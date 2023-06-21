import { faJar, faCloudSun, faUtensils, faCode } from '@fortawesome/free-solid-svg-icons'

import photo1 from '../assets/images/pickles.jpg'
import photo2 from '../assets/images/weather-austin.jpg'
import photo3 from '../assets/images/brew-haus.jpg'

import { Project } from '../pages/Project'

export function ProjectLayout() {
    return (
        <>
            <div className="container">
                <div className="proj_row row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <Project 
                            id="pickle-card"
                            href="https://sly-ry.github.io/Product-Landing-Page/"
                            src={photo1}
                            alt="Assorted variety of pickles"
                            iconId="jar"
                            icon={faJar}
                            title="Picklers' Pickles"
                            text="A product landing page created using HTML and CSS"
                            stack1="React"
                            stack2="Bootstrap"
                            code={faCode}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Project 
                            href="https://sly-ry.github.io/WorldWide-Weather"
                            src={photo2}
                            alt="A lightning strike across the sky in Austin, TX"
                            iconId="cloud"
                            icon={faCloudSun}
                            title="WorldWide Weather"
                            text="A weather dashboard that displays the current and 5-Days forecast of a searched city."
                            stack1="React"
                            stack2="Bootstrap"
                            code={faCode}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Project 
                            id="food-card"
                            href="https://sly-ry.github.io/Product-Landing-Page/"
                            src={photo3}
                            alt="A cold glass of beer"
                            iconId="food"
                            icon={faUtensils}
                            title="Food Festival"
                            text="Food Festival is a PWA that promotes and sells tickets for the annual Food Festival Event."
                            stack1="React"
                            stack2="Bootstrap"
                            code={faCode}
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}