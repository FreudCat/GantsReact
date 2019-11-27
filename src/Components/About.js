import React, { Component } from "react"; 

class About extends Component
{
	render() 
	{
		return (
			<div className={`page-wrap`}>
				<div className="container" id="about-page">
					<div className="content">

						<div className="row">
							<p id="about-header">ABOUT US</p>
						</div>

							<div className="row">
								<div className="col-12 col-md-4 offset-lg-1 padding">
									<br/>
									<p id="about-topic">We create and make things better</p>
								</div>

								<div className="col-md-8 col-lg-6 padding">
									<p id="about-font">We
									are a unique provider of services to help
									new and existing businesses flourish in
									today’s competitive marketplace. Our success comes from invested partnerships with
									our clients. </p>
								</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<p id="bottom-about-font">We are here
									to assist you
									in your success</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		)
    }
}

export default About; 