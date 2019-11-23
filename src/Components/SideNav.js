import React, { Component } from "react"; 
import { Link } from "react-router-dom"; 

const Sidenav = (props) => {
    
    return(

<React.Fragment>
        <div className="container">
            <div id="sidenav">
                <nav>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link> 
							{/* if home doesn't work, may need to change this link to */}
                        </li>
                        <li>
                            <Link to="/about" >About</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
		</React.Fragment>
	);
	}


export default Sidenav; 