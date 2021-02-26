import React from "react";

const About = () => {

    return(
        <div>
            <h2>Get to know the Team!</h2>

            <section className="team">
                <h3>Front End</h3>

                <div className="member">
                    <img src="https://ca.slack-edge.com/ESZCHB482-W0143SWM5FG-9ac0871f2e8d-512" alt="Alan" />
                    <h4>Alan Mir</h4>
                    <a href="https://github.com/Veilios" >
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1051/1051275.svg?token=exp=1614308230~hmac=e04501947718709816869598fc3d9bf1" alt="Github Icon" />
                    </a>
                </div>

                <div className="member">
                    <img src="https://ca.slack-edge.com/ESZCHB482-U01CKMF2RSS-1cbf73589895-512" alt="Samantha" />
                    <h4>Samantha Johnson</h4>
                    <a href="https://github.com/samanthaj516">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1051/1051275.svg?token=exp=1614308230~hmac=e04501947718709816869598fc3d9bf1" alt="Github Icon" />
                    </a>
                </div>

                <div className="member">
                    <img src="https://ca.slack-edge.com/ESZCHB482-W012X6T496D-80c9c36cb6f9-512" alt="Mark" />
                    <h4>Mark Stahl</h4>
                    <a href="https://github.com/markstahl">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1051/1051275.svg?token=exp=1614308230~hmac=e04501947718709816869598fc3d9bf1" alt="Github Icon" />
                    </a>
                </div>
            </section>

            <section className="team">
                <h3>Back End</h3>

                <div className="member">
                    <img src="https://ca.slack-edge.com/ESZCHB482-W015HRCSW3G-be4b82e0b948-512" alt="William"></img>
                    <h4>William Jensen</h4>
                    <a href="https://github.com/william-jensen01">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1051/1051275.svg?token=exp=1614308230~hmac=e04501947718709816869598fc3d9bf1" alt="Github Icon" />
                        </a>
                </div>

                <div className="member">
                    <img src="https://ca.slack-edge.com/ESZCHB482-W012JQ3PDC3-ffb713631186-512" alt="Estaban" />
                    <h4>Estaban Licea Jr.</h4>
                    <a href="https://github.com/e-licea">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1051/1051275.svg?token=exp=1614308230~hmac=e04501947718709816869598fc3d9bf1" alt="Github Icon" />
                    </a>
                </div>
            </section>
        </div>
    )
};

export default About;