import React, { Component } from "react"; 
import img1 from "../img/astronaut.jpg";


class Team extends Component
{
	render() {
		return (
			<div className={`page-wrap`}>
				<div className="container" id="team-page">
					<div className="content">
						<div className="row row-content align-items-center align-self-center d-block d-lg-none">
							{/* will only be seen in screens smaller than large, images are vert instead of horiz */}
							<div className="offset-2 col-8 offset-md-3 col-md-6">
								<p id="team-header">THE TEAM</p>
							</div>
							<div className="offset-3 col-6 offset-sm-3 col-sm-2 offset-md-4 col-md-4">
								<img className="imgBorder imgHoverL" src={img1} width="100%"/>
								<p id="team-font">Gants | Founder</p>
							</div>
							<div className="offset-3 col-6 col-sm-2 offset-md-4 col-md-4">
								<img className="imgBorder imgHoverC imgPadCenter" src={img1}
										width="100%"/>
								<p id="team-font">Rowdy | CEO</p>
							</div>
							<div className="offset-3 col-6 col-sm-2 offset-md-4 col-md-4">
								<img className="imgBorder imgHoverR" src={img1} width="100%"/>
								<p id="team-font">Freud | CTO</p>
							</div>
						</div>
						<div className="d-none d-lg-block">
							<div className="row">
								<div className="offset-2 col-8 offset-md-3 col-md-6">
								<p id="team-header">THE TEAM</p>
								</div>
								</div>
								<div className="row justify-content-lg-center">
								<div className=" col-lg-3 padding">
								<img className="imgBorder imgHoverL" src={img1} width="100%"/>
									<p id="team-font">Gants | Founder</p>
								</div>
								<div className="col-lg-3">
								<img className="imgBorder imgHoverC imgPadCenter" src={img1}
											width="100%"/>
									<p id="team-font">Rowdy | CEO</p>
								</div>
								<div className="col-lg-3">
								<img className="imgBorder imgHoverR" src={img1} width="100%"/>
									<p id="team-font">Freud | CTO</p>
								</div>
								
								{/* Only seen on screens bigger than 992 - images will be horizontal versus vertical */}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
    }
}

export default Team; 