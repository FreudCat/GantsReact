import React, { Component } from "react"; 
import img1 from "../img/astronaut.jpg";


class Team extends Component
{
	render() {
        return (
            <div className={`page-wrap`}>
                <div className="container" id="team-page">
                    <div className="content">
                    <div className="row row-content align-items-center align-self-center">
						<div className="offset-4 col-4">
							<p id="team-header">THE TEAM</p>
						</div>
                        <div className="offset-3 col-6 offset-sm-3 col-sm-2">
						<img className="imgBorder imgHoverL" src={img1} width="100%"/>
						<p id="team-font">Gants | Founder</p>
					</div>
					<div className="offset-3 col-6 col-sm-2">
						<img className="imgBorder imgHoverC imgPadCenter" src={img1}
								width="100%"/>
						<p id="team-font">Rowdy | CEO</p>
					</div>
					<div className="offset-3 col-6 col-sm-2">
						<img className="imgBorder imgHoverR" src={img1} width="100%"/>
						<p id="team-font">Freud | CTO</p>
					</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team; 