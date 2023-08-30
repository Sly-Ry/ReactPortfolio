import "./About.css";

import myPhoto from '../../assets/images/photo1.jpg'

export function About() {
    return (
        <>
            <div className="About d-grid">
                <div className="about_box mx-auto my-auto w-100 p-2 d-grid">

                    <div className="row row-col-2 d-flex align-items-center">

                        <div id="box1" className="a_box col-6 d-flex align-items-center justify-content-end">
                            <img loading="lazy" src={myPhoto} alt=""/>
                        </div>

                        <div id="box2" className="a_box col-6 d-flex flex-column align-items-center">
                            <div className="info ">
                                <h5>ABOUT<span>ME</span> </h5>
                                <h3>A dedicated Front-end Developer based in Austin, TX</h3>
                                <p>As a junior Front-end Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Bootstrap, and Materialize. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                            </div>
                            <div className="i_box">
                                <i className="fa-solid fa-cloud"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}