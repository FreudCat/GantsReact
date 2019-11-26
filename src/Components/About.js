import React, { Component } from "react"; 

class About extends Component
{
	render() {
        return (
            <div className={`page-wrap`}>
                <div className="container" id="about-page">
                    <div className="content">
                        <div className="row">
                        <p id="about-header">ABOUT US</p>
                        <p id="about-topic">We create and make things better</p>
							
                        <p id="about-font">We
									are a unique provider of services to help
									new and existing businesses flourish in
									today’s competitive marketplace. Our success comes from invested partnerships with
									our clients. Whether your need is immediate, project
									based or if you would like to have us along side for an extended time, we are here
									to assist you
									in your success.</p>
                                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About; 