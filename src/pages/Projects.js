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
                                    <h4 className="card-title">Picklers' Pickles</h4>
                                    <p className="card-text">A product landing page created using HTML and CSS</p>
                                    <div className="stack">
                                        
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
                                    <h4 className="card-title">Keys Galore</h4>
                                    <p className="card-text">A weather dashboard that displays the current and 5-Days forecast of a searched city using the server-side API retrived from the Open Weather API.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="proj card">
                                <a href="https://sly-ry.github.io/progressive-web-application/" class="image">
                                    <img src={photo3} alt="A collection of personalized keys." className='card-img-top'/>
                                </a>
                                <div className="card-body">
                                    <h4 className="card-title">Food Festival</h4>
                                    <p className="card-text">Food Festival is a PWA that promotes and sells tickets for the annual Food Festival Event.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}