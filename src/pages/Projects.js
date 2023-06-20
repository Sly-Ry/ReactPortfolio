import '../styles/Projects.css'
import photo from '../assets/images/keys1.jpg'

export function Projects() {
    return (
        <>

            <div className="Projects d-flex justify-content-center">
                <div className="container">
                    <div className="proj_row row g-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="proj card">
                                <img src={photo} alt="A collection of personalized keys." className='card-img-top'/>
                                <div className="card-body">
                                    <h4 className="card-title">Keys Galore</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis nulla ipsam facilis quos, exercitationem ratione, quod reiciendis aliquam sint similique eum est ipsum commodi! Corporis tempora ipsum tempore animi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="proj card">
                                <img src={photo} alt="A collection of personalized keys." className='card-img-top'/>
                                <div className="card-body">
                                    <h4 className="card-title">Keys Galore</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis nulla ipsam facilis quos, exercitationem ratione, quod reiciendis aliquam sint similique eum est ipsum commodi! Corporis tempora ipsum tempore animi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="proj card">
                                <img src={photo} alt="A collection of personalized keys." className='card-img-top'/>
                                <div className="card-body">
                                    <h4 className="card-title">Keys Galore</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis nulla ipsam facilis quos, exercitationem ratione, quod reiciendis aliquam sint similique eum est ipsum commodi! Corporis tempora ipsum tempore animi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}