import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import hearder from '../Images/header-bg1.jpg'
import hearder1 from '../Images/header-bg.jpg'
import hearder2 from '../Images/header-bg2.jpg'
import About from '../Images/about.jpeg'
import img1 from '../Images/1.jpg'
import img2 from '../Images/2.jpg'
import img3 from '../Images/3.jpg'
import img4 from '../Images/4.jpg'
import img5 from '../Images/5.jpg'
import img6 from '../Images/6.jpg'
import img7 from '../Images/7.jpg'
import img8 from '../Images/8.jpg'
import Workflow from '../Images/workflow.jpg'
import {Link} from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item className="carousel-item">
                        <img
                            className="d-block w-100"
                            src={hearder}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <img
                            className="d-block w-100"
                            src={hearder1}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <img
                            className="d-block w-100"
                            src={hearder2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <section className="about" id="about">
                    <div className="container">
                        <div className="row align-items-lg-center">
                            <div className="col-12 col-md-6 text-center text-md-left" data-aos="zoom-in">
                                <div className="section-heading">
                                    <h1>Who we are?</h1>
                                </div>
                                <p>We are one of the top architects and interior designers in Kannur who have done amazing projects all across kerala
				                   for a huge variety of clients. All our services like architecture consulting and interior designing are available in
				                   Kerala and Bangalore.We have a huge list of clients from all
				                   these Places.We have our branch office in Kannur Thalap.Cloud Homes Developers in Kannur provide all sort of home
				                   interior designs and architect consulting that cater to the taste, budget and other requirements of clients.You can
				                   either contact us at our office in Kannur or you can reach us over phone.Our team is ready to serve you better.</p>
                                   <Link to="/aboutus"><div className="btn mt-4 mb-5 mb-md-0">Find out more</div></Link>
                            </div>
                            <div className="col-12 col-md-6" data-aos="zoom-in">
                                <Image src={About} fluid rounded ></Image>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="menu" id="menu">
                    <div className="container">
                        <div className="row text-center text-white">
                            <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                <Link to="/services">
                                    <div className="shop-info">
                                        <i className="fa fa-building-o mb-3" aria-hidden="true"></i>
                                        <h4 className="mb-4">ARCHITECTS</h4>
                                        <p>We create designs for new construction projects, alterations....</p>
                                        <p>Read More >></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                <Link to="/services">
                                    <div className="shop-info">
                                        <i className="fa fa-home mb-3" aria-hidden="true"></i>
                                        <h4 className="mb-4">CONSTRUCTION</h4>
                                        <p>Building construction is the process of adding structure....</p>
                                        <p>Read More >></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                <Link to="/services">
                                    <div className="shop-info">
                                        <i className="fa fa-hotel mb-3" aria-hidden="true"></i>
                                        <h4 className="mb-4">INTERIOR</h4>
                                        <p>Turn your interior space into an effective setting....</p>
                                        <p>Read More >></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                <Link to="/services">
                                    <div className="shop-info">
                                        <i className="fa fa-edit mb-3" aria-hidden="true"></i>
                                        <h4 className="mb-4">TOTAL DESIGN PACKAGE</h4>
                                        <p>Which includes plan,elevation,3D views,sanction drawing....</p>
                                        <p>Read More >></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                <Link to="/services">
                                    <div className="shop-info">
                                        <i className="fa fa-eye mb-3" aria-hidden="true"></i>
                                        <h4 className="mb-4">3D VISUALISATION</h4>
                                        <p>3d interior rendering is a very good way of visualizing an....</p>
                                        <p>Read More >></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                <Link to="/services">
                                    <div className="shop-info">
                                        <i className="fa fa-image mb-3" aria-hidden="true"></i>
                                        <h4 className="mb-4">LANDSCAPE</h4>
                                        <p>Make a bridge between nature and culture through landscape architecture.....</p>
                                        <p>Read More >></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid p-0">
                        <div className="section-heading my-5 text-center">
                            <h1>Our projects</h1>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-sm-6 col-xl-3 order-sm-1 order-xl-1 project-details" data-aos="fade-up" >
                                <Image src={img1} fluid rounded alt="Avatar"></Image>
                                <Link to="/portfolio"><div className="overlay">
                                    <div className="text">Open Image Gallery</div>
                                </div></Link>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 order-sm-2 order-xl-4 project-details" data-aos="fade-down" >
                                <Image src={img8} fluid rounded alt="Avatar"></Image>
                                <Link to="/portfolio"><div className="overlay">
                                    <div className="text">Open Image Gallery</div>
                                </div></Link>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 order-sm-3 order-xl-2 project-details" data-aos="fade-up" >
                                <Image src={img2} fluid rounded alt="Avatar"></Image>
                                <Link to="/portfolio"><div className="overlay">
                                    <div className="text">Open Image Gallery</div>
                                </div></Link>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 order-sm-4 order-xl-5 project-details" data-aos="fade-down" >
                                <Image src={img3} fluid rounded alt="Avatar"></Image>
                                <Link to="/portfolio"><div className="overlay">
                                    <div className="text">Open Image Gallery</div>
                                </div></Link>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 order-sm-5 order-xl-3 project-details" data-aos="fade-up" >
                                <Image src={img4} fluid rounded alt="Avatar"></Image>
                                <Link to="/portfolio"><div className="overlay">
                                    <div className="text">Open Image Gallery</div>
                                </div></Link>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 order-sm-6 order-xl-6 project-details" data-aos="fade-down" >
                                <Image src={img5} fluid rounded alt="Avatar"></Image>
                                <Link to="/portfolio"><div className="overlay">
                                    <div className="text">Open Image Gallery</div>
                                </div></Link>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 order-sm-2 order-xl-4 project-details" data-aos="fade-up">
                                <Image src={img6} fluid rounded alt="Avatar"></Image>
                                <Link to="/portfolio"><div className="overlay">
                                    <div className="text">Open Image Gallery</div>
                                </div></Link>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 order-sm-1 order-xl-1 project-details" data-aos="fade-down" >
                                <Image src={img7} fluid rounded alt="Avatar"></Image>
                                <Link to="/portfolio"><div className="overlay">
                                    <div className="text">Open Image Gallery</div>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about" id="about">
                    <div className="container">
                        <div className="row align-items-lg-center">
                            <div className="col-12  text-center" data-aos="zoom-in">
                                <div className="section-heading">
                                    <h1>Our process</h1>
                                </div>
                            </div>
                            <div className="col-12" data-aos="zoom-in">
                            <Image src={Workflow} fluid rounded alt="Avatar"></Image>
                            </div>
                        </div>
                    </div>
                </section>
            </div>            
        )
    }
}

export default Home
