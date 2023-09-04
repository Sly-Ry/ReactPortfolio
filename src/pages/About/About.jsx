import "./About.css";

import myPhoto from '../../assets/images/photo1.jpg'

export function About() {
    return (
        <>
            <div id="about" className="container-fluid">
                    <div className="row djea" style={{height: '100vh'}}>
                        <div id="box1"  className="col-12 col-md-10 col-lg-6 col-xl-5 da justify-content-end h-100">
                           <img loading="lazy" src={myPhoto} alt="" className="rounded-0" style={{maxWidth: 450}}/>
                        </div>
                        <div id="box2" className="col-12 col-sm-10 col-lg-6 col-xl-5 dja flex-column rounded-5">
                            <div className="i_box1">
                                <i className="fa-solid fa-cloud"></i>
                            </div>
                            <div className="info rounded-4 p-4 text-white">
                                <p classNzame="about-me fs-1 fw-bold">ABOUT ME</p>
                                <p className="fs-4 fw-bold">A dedicated Frontend Developer based in Austin, TX</p>
                                <p className="fs-5">As a junior Frontend Developer, I possess an arsenal of skills in HTML, CSS, JavaScript, React, Bootstrap, and Materialize. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                            </div>
                            <div className="i_box2">
                                <i className="fa-solid fa-cloud"></i>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}