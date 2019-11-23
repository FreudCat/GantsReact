import React, { Component } from "react"; 
import { Link } from "react-router-dom"; 
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import logo from "../img/GGI-Logo.png"; //imports the local logo - need to send to server? 

class Header extends Component 
{
	constructor(props)
	{
		super(props);
		this.state={isNavOpen:false};
		this.toggleNav=this.toggleNav.bind(this);
		this.handleClickOutside=this.handleClickOutside.bind(this); //this handles clicks outside of the open navbar and closes it 
	}

	toggleNav() //will close navbar 
	{
		this.setState({isNavOpen:!this.state.isNavOpen});
	}

	componentWillMount() {
        document.addEventListener('mousedown', this.handleClickOutside); //adds an event listening - when user clicks outside of navbar drop-down, will call function to close navbar drop-down
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
	handleClickOutside(event) {
        const t = event.target;
        if (this.state.isNavOpen && !t.classList.contains('nav-link')) {
            this.toggleNav();  // handles a click anywhere on the page and closes navbar. If the click does not contain a className of "nav-link" it will close - need to put this here otherwise the links won't register at all 
        }
    }
	render()
	{
    return(
			<React.Fragment>
        <div className="container">
					<div id="header">
						<Navbar>
							<Link to="/">
								<img src={logo} height="30" width="30" alt="Gants Group Logo" id="logoResponsive"/> 
							</Link>
							<div className="d-none d-md-block">
							<p id="headerFont">Services to accelerate success</p>
							</div>
							<nav className="d-block d-md-none">
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
						</Navbar>
					</div>
        </div>
			</React.Fragment>
		);
	}
}


export default Header; 