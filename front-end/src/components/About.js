import React from "react";

const About = () => {

    return(
        <div>
            <h1 className="title">Get to know the Team!</h1>

            <h2 className="role">Front End</h2>
            <section className="team">
                <div className="member">
                    <img className="profile" src="https://ca.slack-edge.com/ESZCHB482-W0143SWM5FG-9ac0871f2e8d-512" alt="Alan" />
                    <h3>Alan Mir</h3>
                    <a href="https://github.com/Veilios" >
                        <img className="github" src="https://www.flaticon.com/svg/vstatic/svg/1051/1051275.svg?token=exp=1614308230~hmac=e04501947718709816869598fc3d9bf1" alt="Github Icon" />
                    </a>
                </div>

                <div className="member">
                    <img className="profile" src="https://ca.slack-edge.com/ESZCHB482-U01CKMF2RSS-1cbf73589895-512" alt="Samantha" />
                    <h3>Samantha Johnson</h3>
                    <a href="https://github.com/samanthaj516">
                        <img className="github" src="https://www.flaticon.com/svg/vstatic/svg/1051/1051275.svg?token=exp=1614308230~hmac=e04501947718709816869598fc3d9bf1" alt="Github Icon" />
                    </a>
                </div>

                <div className="member">
                    <img className="profile" src="https://ca.slack-edge.com/ESZCHB482-W012X6T496D-80c9c36cb6f9-512" alt="Mark" />
                    <h3>Mark Stahl</h3>
                    <a href="https://github.com/markstahl">
                        <img className="github" src="https://www.flaticon.com/svg/vstatic/svg/1051/1051275.svg?token=exp=1614308230~hmac=e04501947718709816869598fc3d9bf1" alt="Github Icon" />
                    </a>
                </div>
            </section>

            <h2 className="role">Back End</h2>
            <section className="team">
                <div className="member">
                    <img className="profile" src="https://ca.slack-edge.com/ESZCHB482-W015HRCSW3G-be4b82e0b948-512" alt="William"></img>
                    <h3>William Jensen</h3>
                    <a href="https://github.com/william-jensen01">
                        <img className="github" src="https://www.flaticon.com/svg/vstatic/svg/1051/1051275.svg?token=exp=1614308230~hmac=e04501947718709816869598fc3d9bf1" alt="Github Icon" />
                        </a>
                </div>

                <div className="member">
                    <img className="profile" src="https://ca.slack-edge.com/ESZCHB482-W012JQ3PDC3-ffb713631186-512" alt="Estaban" />
                    <h3>Estaban Licea Jr.</h3>
                    <a href="https://github.com/e-licea">
                        <img className="github" src="https://www.flaticon.com/svg/vstatic/svg/1051/1051275.svg?token=exp=1614308230~hmac=e04501947718709816869598fc3d9bf1" alt="Github Icon" />
                    </a>
                </div>
            </section>
        </div>
    )
};

export default About;