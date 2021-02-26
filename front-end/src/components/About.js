import React from "react";

const About = () => {
    return(
        <div>
            <h2>Get to know the Team!</h2>

            <section>
                <h3>Front End</h3>

                <div className="team">
                    <img src="#" alt="Alan" />
                    <h4>Alan Mir</h4>
                    <a href="https://github.com/Veilios" >Github</a>
                </div>

                <div className="team">
                    <img src="#" alt="Samantha" />
                    <h4>Samantha Johnson</h4>
                    <a href="https://github.com/samanthaj516">Github</a>
                </div>

                <div className="team">
                    <img src="https://avatars.githubusercontent.com/u/35966763?s=460&u=75c8887f1818037771798426fe8ee58234e5fd92&v=4" alt="Mark" />
                    <h4>Mark Stahl</h4>
                    <a href="https://github.com/markstahl">Github</a>
                </div>
            </section>

            <section>
                <h3>Back End</h3>

                <div className="team">
                    <img src="#" alt="William"></img>
                    <h4>William Jensen</h4>
                    <a href="https://github.com/william-jensen01">Github</a>
                </div>

                <div className="team">
                    <img src="#" alt="Estaban" />
                    <h4>Estaban Licea Jr.</h4>
                    <a href="https://github.com/e-licea">Github</a>
                </div>
            </section>
        </div>
    )
};