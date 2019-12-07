import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import nodemailer from "nodemailer"; //allows mail to be sent from the contact form 
//import axios from "axios"; 
import newUserEmail from "./Email";


class Contact extends Component {
	constructor(props) {
		super(props);
		this.state =
			{
				name: "",
				emailAddress: "",
				feedback: "",
				touched: {
					name: false,
					emailAddress: false
				},
				isModalOpen: false
			};
		this.handleInputChange = this.handleInputChange.bind(this);
		// this.handleSubmit=this.handleSubmit.bind(this); 
		this.handlenewUserEmail = this.handlenewUserEmail.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}
	validate(name, emailAddress) {//part of form validation

		const errors = {
			name: '',
			emailAddress: ''
		};

		if (this.state.touched.name) {
			if (name.length < 1) {
				errors.name = 'Please enter your name';
			}
		}

		if (this.state.touched.emailAddress && !emailAddress.includes('@')) {
			errors.emailAddress = 'Please enter a valid email';
		}

		return errors;
	}
	handleBlur = (field) => () => {
		this.setState({
			touched: { ...this.state.touched, [field]: true }
		});
	}//part of form validation

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]: value
		});
	}

	// 	async handleSubmit(event){
	// 		event.preventDefault(); 
	// 		console.log(this.state);

	// 		axios({
	//       method: "POST", 
	//       url:"http://localhost:3000/contact", 
	//       data:  this.state
	//     }).then((response)=>{
	//       if (response.data.status === 'success'){
	//         alert("Message Sent."); 
	//         this.resetForm()
	//       }else if(response.data.status === 'fail'){
	//         alert("Message failed to send.")
	//       }
	//     })
	//   } 

	handlenewUserEmail(event) {
		event.preventDefault();
		fetch("http://127.0.0.1:4000");
		
		this.toggleModal(); 
		return newUserEmail(this.state.emailAddress, this.state.name, this.state.feedback);
		//HAVE To import function from the other .js file (see above) and then called the function WITHIN another a function while passing in parameters, and then this outer function is called later below in an onclick. Cannot just call imported function with an onclick. 
	}

	render() {
		const errors = this.validate(this.state.name, this.state.emailAddress);    //part of form validation
		return (
			<React.Fragment>
			<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
				<ModalHeader id="modalHeader">Email Sent</ModalHeader>
					<ModalBody id="modalBody">Thank you</ModalBody>
			</Modal>




			<div className={`page-wrap`}>
				<div className="container" id="contact-page">

					<div className="content">
						<div className="d-block d-lg-none">
							<div className="row row-content align-items-center align-self-center">
								<div className="col-12">
									<p id="contact-header">CONTACT US</p>
									<p id="contact-font">Need help? Contact us for questions, pricing, or more information</p>
									<br />
								</div>
							</div>

							<div className="row row-content align-items-center align-self-center">
								<div className="col-12 offset-md-2 col-md-8">
									<Form onSubmit={this.handleSubmit}>
										<FormGroup>
											<Label htmlFor="name">Name</Label>
											<div className="col-12">
												<Input type="text" id="name" name="name"
													placeholder="Your Name"
													value={this.state.name}
													invalid={errors.name}
													onBlur={this.handleBlur("name")}
													onChange={this.handleInputChange} />
											</div>
											<br />
											<FormFeedback>{errors.name}</FormFeedback>
										</FormGroup>
										<FormGroup>
											<Label htmlFor="emailAddress">Email</Label>
											<div className="col-12">
												<Input type="AddemailAddress" id="emailAddress" name="emailAddress"
													placeholder="Your Email"
													value={this.state.emailAddress}
													invalid={errors.emailAddress}
													onBlur={this.handleBlur("emailAddress")}
													onChange={this.handleInputChange} />
											</div>
											<br />
											<FormFeedback>{errors.emailAddress}</FormFeedback>
										</FormGroup>
										<FormGroup>
											<Label htmlFor="feedback">Comments and Questions</Label>
											<div className="col-12">
												<Input type="textarea" id="feedback" name="feedback"
													placeholder="Your inquiry here"
													value={this.state.feedback}
													onChange={this.handleInputChange} />
											</div>
											<br />
										</FormGroup>
										<FormGroup>
											<Button type="submit" className="btn-outline-secondary" onClick={(event) => { this.handlenewUserEmail(event) }}>
												Send
								</Button>
										</FormGroup>
									</Form>
								</div>
							</div>
							<br />
							<div className="row bottom-row">
								<div className="col-6 col-md-6">
									<a href="tel:509-869-7354" id="phone-font">Call Us</a>
								</div>
								<div className="col-6 col-md-6">
									<a href="mailto: Shawn@cprofessionals.com" id="email-font">Email Us</a>
								</div>
							</div>
						</div>
						<div className="d-none d-lg-block">
							<div className="row">
								<div className="col-12">
									<p id="contact-header">CONTACT US</p>
									<p id="contact-font">Need help? Contact us for questions, pricing, or more information</p>
									<br />
								</div>
							</div>

							<div className="row">
								<div className="offset-lg-1 col-lg-5">
									<Form>
										<FormGroup>
											<Label htmlFor="name">Name</Label>
											<div className="col-12">
												<Input type="text" id="name" name="name"
													placeholder="Your Name"
													value={this.state.name}
													invalid={errors.name}
													onBlur={this.handleBlur("name")}
													onChange={this.handleInputChange} />
											</div>
											<br />
											<FormFeedback>{errors.name}</FormFeedback>
										</FormGroup>
										<FormGroup>
											<Label htmlFor="emailAddress">Email</Label>
											<div className="col-12">
												<Input type="AddemailAddress" id="emailAddress" name="emailAddress"
													placeholder="Your Email"
													value={this.state.emailAddress}
													invalid={errors.emailAddress}
													onBlur={this.handleBlur("emailAddress")}
													onChange={this.handleInputChange} />
											</div>
											<br />
											<FormFeedback>{errors.emailAddress}</FormFeedback>
										</FormGroup>
										<FormGroup>
											<Label htmlFor="feedback" id="comment-label">Comments and Questions</Label>
											<div className="col-12">
												<Input type="textarea" id="feedback" name="feedback"
													placeholder="Your inquiry here"
													value={this.state.feedback}
													onChange={this.handleInputChange} />
											</div>
											<br />
										</FormGroup>
										<FormGroup>
											<Button type="submit" className="btn-outline-secondary" id="lg-btn" onClick={this.handlenewUserEmail}>
												Send
								</Button>
										</FormGroup>
									</Form>

								</div>
								<div className="col-lg-1">
									{/* empty div for spacing */}
								</div>
								<div className="col-lg-2" id="phone-div">
									<p id="phone-header">PHONE:</p>
									<a href="tel:509-869-7354" id="phone-font">509-869-7354</a>
									<p id="email-header">EMAIL: </p>
									<a href="mailto: Shawn@cprofessionals.com" id="email-font">Shawn@cprofessionals.com</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</React.Fragment>

		);
	}
}

export default Contact; 