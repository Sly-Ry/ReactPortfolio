import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJar, faCloudSun, faUtensils, faCode } from '@fortawesome/free-solid-svg-icons'

import '../styles/Projects.css'
import photo1 from '../assets/images/pickles.jpg'
import photo2 from '../assets/images/weather-austin.jpg'
import photo3 from '../assets/images/brew-haus.jpg'

export function Projects() {
    return (
        <>
            <div className="Projects d-flex justify-content-center">
                <div className="container">
                    <div className="proj_row row g-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="proj card">
                                <a href="https://sly-ry.github.io/Product-Landing-Page/" class="image">
                                    <img src={photo1} alt="Assorted variety of pickles." className='card-img-top'/>
                                </a>
                                <div className="card-body">
                                    <div className="card-title d-flex align-items-center justify-content">
                                        <FontAwesomeIcon id='jar' className='i' icon={faJar} />
                                        <h4>Picklers' Pickles</h4>
                                    </div>
                                    <p className="card-text">A product landing page created using HTML and CSS</p>
                                    <div className="stack d-flex align-items-center justify-content-center">
                                        <h5>React</h5>
                                        <h5>Bootstrap</h5>
                                    </div>
                                    <div className="card-foot d-flex align-items-center justify-content-center">
                                        <h4>Code</h4>
                                        <FontAwesomeIcon id='foot' icon={faCode} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="proj card">
                                <a href="https://sly-ry.github.io/WorldWide-Weather" class="image">
                                    <img src={photo2} alt="A lightning strike across the sky in Austin, TX." className='card-img-top'/>
                                </a>
                                <div className="card-body">
                                    <div className='card-title d-flex align-items-center justify-content'>
                                        <FontAwesomeIcon id="cloud" className='i' icon={faCloudSun} />
                                        <h4>WorldWide Weather</h4>
                                    </div>
                                    <p className="card-text">A weather dashboard that displays the current and 5-Days forecast of a searched city.</p>
                                    <div className="stack d-flex align-items-center justify-content-center">
                                        <h5>React</h5>
                                        <h5>Bootstrap</h5>
                                    </div>
                                    <div className="card-foot d-flex align-items-center justify-content-center">
                                        <h4>Code</h4>
                                        <FontAwesomeIcon id='foot' icon={faCode} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="proj card">
                                <a href="https://sly-ry.github.io/progressive-web-application/" class="image">
                                    <img src={photo3} alt="A collection of personalized keys." className='card-img-top'/>
                                </a>
                                <div className="card-body">
                                    <div className="card-title d-flex align-items-center justify-content">
                                        <FontAwesomeIcon id='food' className='i' icon={faUtensils} />
                                        <h4>Food Festival</h4>
                                    </div>
                                    <p className="card-text">Food Festival is a PWA that promotes and sells tickets for the annual Food Festival Event.</p>
                                    <div className="stack d-flex align-items-center justify-content-center">
                                        <h5>React</h5>
                                        <h5>Bootstrap</h5>
                                    </div>
                                    <div className="card-foot d-flex align-items-center justify-content-center">
                                        <h4>Code</h4>
                                        <FontAwesomeIcon id='foot' icon={faCode} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}