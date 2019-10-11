import React, { Component } from 'react'
import ContactHead from '../Images/contactus.jpg'
import axios from 'axios';
import ReactSnackBar from "react-js-snackbar";
import {Table,tbody} from 'react-bootstrap'
class Contactus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            mobile: '',
            message: '',
            notifyActionSuccess: '',
            SuccessMsg: '',
            hasError: '',
            errorMsg: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit= e => {
        e.preventDefault()
        const { name, email, mobile, message } = this.state;
        /**
         * TODO : validation
         */
        axios.post('http://localhost:3001/api/form', { name, email, mobile, message})
          .then((response) => {
            if(response.data.success) {
                this.setState({notifyActionSuccess: true, SuccessMsg: response.data.message});
                setTimeout(() => {
                    this.setState({ notifyActionSuccess: false, SuccessMsg: '' });
                }, 2000);
            }
            else {
                this.setState({hasError: true, errorMsg: response.data.message});
                setTimeout(() => {
                    this.setState({ hasError: false, errorMsg: '' });
                }, 4000);
            }
          })
          .catch(function (error, err) {
            console.log(error.data);
          });
    }
    render() {
        return (
            <div>
                {this.notifyActionStatus()}
                <div>
                <img src={ContactHead} className="img-fluid" alt="" data-aos="zoom-out"></img>
                    <section id="contact">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="section-header" data-aos="zoom-out">
                                    <h3 style={{ color: '#f0f0f0' }}>Contact Us</h3>
                                    <p>We'd love to hear from you.
                                    Feel free to contact us with your requirements and our representatives will get in touch with you.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row align-items-lg-center">
                                <div className="form col-12 col-md-6 text-center text-md-left" data-aos="zoom-out" >
                                    <section style={{paddingTop:"0"}}>
                                    <form
                                        onSubmit={this.handleSubmit}
                                        className="contactForm">
                                        <div className="form-row">
                                            <div className="form-group col-lg-6">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    onChange={this.handleChange}
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name*"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 4 chars" />
                                                <div className="validation"></div>
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    onChange={this.handleChange}
                                                    id="email"
                                                    placeholder="Your Email*"
                                                    data-rule="email"
                                                    data-msg="Please enter a valid email" />
                                                <div className="validation"></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="mobile"
                                                onChange={this.handleChange}
                                                id="mobile"
                                                placeholder="Your Phone*"
                                                data-rule="required"
                                                data-msg="Please enter Your contact number" />
                                            <div className="validation"></div>
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                onChange={this.handleChange}
                                                rows="5"
                                                data-rule="required"
                                                data-msg="Please write something for us"
                                                placeholder="Message">

                                            </textarea>
                                            <div className="validation"></div>
                                        </div>
                                        <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                                    </form>
                                    </section>
                                </div>
                                <div className="col-12 col-md-6" style={{paddingBottom:"60px"}} data-aos="zoom-out">
                                    <Table striped borderless variant="dark" hover style={{borderRadius:"20px"}}>
                                        <tbody>

                                            <tr className="col-md-12 info">
                                                <td><i className="fa fa-map-marker"></i></td>
                                                <td> <p style={{ color: '#f0f0f0' }}>Cloud Homes Developers, 4/121 Opp.Kalyan Sarees, Near Stadium Complex, Kannur </p></td>
                                            </tr>
                                            <tr className="col-md-12 info">
                                                    <td><i className="fa fa-envelope"></i></td>
                                                    <td><p style={{ color: '#f0f0f0' }}>info@cloudhomesdevelopers.com</p></td>
                                            </tr>
                                            <tr className="col-md-12 info">
                                                    <td><i className="fa fa-phone"></i></td>
                                                    <td><p style={{ color: '#f0f0f0' }}>+91-9747867892</p></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="map mb-4 mb-lg-0" >
                        <iframe
                            className="embed-responsive-item"
                            title="Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387.3616825122146!2d75.37073766998817!3d11.87984952275257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDUyJzQ3LjQiTiA3NcKwMjInMTUuMSJF!5e0!3m2!1sen!2sin!4v1568007241938!5m2!1sen!2sin"
                            frameBorder="0" style={{ border: '0', width: '100%', height: '500px' }}
                            display="initial"
                            position="relative"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        )
    }
    notifyActionStatus = () => {
        if(this.state.notifyActionSuccess) {
            return(
            <ReactSnackBar
             Icon={<span><i className="fa fa-check" aria-hidden="true" style={{color:'green', fontSize:'50px'}}></i></span>}
              Show={this.state.notifyActionSuccess}>
                {this.state.SuccessMsg}
            </ReactSnackBar>)
            
        }
        if(this.state.hasError) {
            return (
                <ReactSnackBar 
                 Icon={<span><i className="fa fa-times" aria-hidden="true" style={{color:'red', fontSize:'50px'}}></i></span >}
                 Show={this.state.hasError}>
                {this.state.errorMsg}
            </ReactSnackBar>
            )
        }
        return null;
    }
}

export default Contactus
