import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            name:"", 
            emailAddress:"", 
            feedback:"",
            touched: {
                name: false,
                emailAddress: false
            }
        };
        this.handleInputChange=this.handleInputChange.bind(this);
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
            touched: {...this.state.touched, [field]: true}
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


	render() {
        const errors = this.validate(this.state.name, this.state.emailAddress);    //part of form validation
        return (
            <div className={`page-wrap`}>
                <div className="container" id="contact-page">
                    <div className="content">
                        <div className="row row-content align-items-center align-self-center">
                            <div className="col-12">
                                <p id="contact-header">CONTACT US</p>
                                <p id="contact-font">Need help? Contact us for questions, pricing, or for more information</p>
                                <br/>
                            </div>
					    </div>
				    
                        <div className="row row-content align-items-center align-self-center">
                            <div className="col-12">
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
                                <br/>
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
                                <br/>
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
                                <br/>
                        
                    </FormGroup>
                    <FormGroup>
                                
                        <Button type="submit" className="btn-outline-secondary">
                            Send 
                        </Button>
                        
                                
                            </FormGroup>
                    </Form>
                            </div>
					    </div>
                        <br/>
					<div className="col-12">
						<p id="phone-header">PHONE: <span id="phone-font">123456789</span></p>
						<p id="email-header">EMAIL: <span id="email-font">gants@gants.com</span></p>
					</div>
				</div>
                    </div>
                </div>
                
            
        )
    }
}

export default Contact; 