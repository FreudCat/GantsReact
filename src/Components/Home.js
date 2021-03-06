import React, { Component } from "react"; 

class Home extends Component 
{  
	render() {
		return (
			<div className={`page-wrap`}>
				<div className="container" id="home-page">
					<div className="content">
						<div className="row">
							<div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
								<p id="home-header">THE GANTS GROUP</p>
							</div>
							<div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6">
								<p className="body-font">We are a unique provider of a group of services to help new and existing businesses       		survive and	flourish in today’s competitive marketplace.</p>
							</div>							
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Home;