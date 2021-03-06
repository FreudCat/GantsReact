import React, { Component } from "react"; 

class Services extends Component
{
	render() {
		return (
			<div className={`page-wrap`}>
				<div className="container" id="services-page">
					<div className="content">
						<div className="d-block d-lg-none">
							<div className="row row-content align-items-center">
								<div className="offset-3 col-2 offset-md-4 col-md-4">
										<p id="services-header">SERVICES</p>
								</div>

								<div className="col-12 offset-md-2 col-md-8">
										<p className="services-item">Application Development</p>
										<p className="services-font">Websites | Mobile Apps | Data Mining | Automation | AI | Games Development | Desktop Apps | E-Commerce | Web Services</p>
								</div>

								<div className="col-12 offset-md-2 col-md-8">
										<p className="services-item">Content Creation</p>
										<p className="services-font">2D and 3D Animation | Digital Rights Management | Graphic Design | Audio and Video Production | Photography | Logo Development</p>
								</div>

								<div className="col-12 offset-md-2 col-md-8">
										<p className="services-item">Marketing</p>
										<p className="services-font">SEO | Social Media | Print | Repuation Management | Customer Suport | Strategy and Planning | Brand Development | </p>
								</div>

								<div className="col-12 offset-md-2 col-md-8">
												<p className="services-item">Information Systems</p>
												<p className="services-font">Network | Cloud-Based | Remote Access | On-Site Services | Telecom | System Design and Architecture | VOIP</p>
								</div>
							</div>
						</div>
						<div className="d-none d-lg-block">
							<div className="row">
								<p id="services-header">SERVICES</p>
							</div>
								<div className="row">

								<div className="offset-lg-1 col-lg-4">
										<p className="services-item">Application Development</p>
										<p className="services-font">Websites | Mobile Apps | Data Mining | Automation | AI | Games Development | Desktop Apps | E-Commerce | Web Services</p>
								</div>
								
								<div className="col-lg-2">
								</div>
								<div className="col-lg-4">
										<p className="services-item">Content Creation</p>
										<p className="services-font">2D and 3D Animation | Digital Rights Management | Graphic Design | Audio and Video Production | Photography | Logo Development</p>
								</div>
								</div>
								<div className="row">

								<div className="offset-lg-1 col-lg-4">
										<p className="services-item">Marketing</p>
										<p className="services-font">SEO | Social Media | Print | Repuation Management | Customer Suport | Strategy and Planning | Brand Development | </p>
								</div>
								<div className="col-lg-2">
								</div>

								<div className="col-lg-4">
											<p className="services-item">Information Systems</p>
											<p className="services-font">Network | Cloud-Based | Remote Access | On-Site Services | Telecom | System Design and Architecture | VOIP</p>
								</div>
							</div>
						</div>
					</div>
					</div>
			</div>
		)
	}
}

export default Services; 