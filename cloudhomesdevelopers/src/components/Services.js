import React, { Component } from 'react'
import Service from '../Images/service.jpg'
import Service1 from '../Images/service-1.jpeg'
import Service2 from '../Images/service-2.jpg'
import Service3 from '../Images/service-3.jpg'
import Service4 from '../Images/service-4.jpg'
import Service5 from '../Images/service-5.jpg'
class Services extends Component {
    render() {
        return (
            <div>
                <section id="services" className="section-bg">
                    <div className="container">
                        <div className="section-header" data-aos="zoom-in" >
                            <h3 > Our Services</h3>
                            <p>"CQD Formula" - Commitment, Quality, Delivery on time</p>
                        </div>
                        <div className="container">
                            <div className="row text-center text-white">
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page">
                                        <h4 className="mb-4">ARCHITECTS</h4>
                                        <img className="img-fluid" src={Service} alt=""></img>
                                        <p>We are a young, dynamic and innovative architecture practice who are passionate,yet down to earth, about the design of buildings.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                    <div className=" service-page">
                                        <h4 className="mb-4">TOTAL DESIGN PACKAGE</h4>
                                        <img className="img-fluid" src={Service1} alt=""></img>
                                        <p>Which includes plan,elevation, 3D views,sanction drawing,estimate, interiors, landscape.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                    <div className=" service-page">
                                        <h4 className="mb-4">INTERIOR</h4>
                                        <img className="img-fluid" src={Service2} alt=""></img>
                                        <p>Turn your interior space into an effective setting for the range of human activities that are to take place there</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                    <div className=" service-page">
                                        <h4 className="mb-4">CONSTRUCTION</h4>
                                        <img className="img-fluid" src={Service3} alt=""></img>
                                        <p>Building construction is the process of adding structure to real property. The vast majority of building construction projects are small renovations.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                    <div className=" service-page">
                                        <h4 className="mb-4">3D VISUALISATION</h4>
                                        <img className="img-fluid" src={Service4} alt=""></img>
                                        <p>3D interior rendering is a very good way of visualizing an interior design idea.is a very efficient way for collecting valuable feedbacks from the client.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv" data-aos="zoom-in">
                                    <div className=" service-page">
                                        <h4 className="mb-4">INTERIOR PHOTOGRAPHY</h4>
                                        <img className="img-fluid" src={Service5} alt=""></img>
                                        <p>Photography is essential for archtectural and interior designing. Only a professional photographer that can make the interiors look fantastic can do this job.</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-5"></hr>
                        </div>
                        <div className="row">
                            <div className="col-md-12 wow bounceInUp" data-wow-duration="1.4s" data-aos="zoom-out">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-gear" style={{color: '#ff689b'}}></i></div>
                                    <h4 className="title">Project Development</h4>
                                    <p className="description">We offer expert assistance in developing, structuring, and financing projects, credit support, and risk allocation, with particular strength in initial project development and feasibility efforts, project financing, and asset management.</p>
                                </div>
                            </div>
                            <div className="col-md-12 wow bounceInUp" data-wow-duration="1.4s" data-aos="zoom-out" >
                                <div className="box">
                                    <div className="icon"><i className="fa fa-puzzle-piece" style={{color:'#e9bf06'}}></i></div>
                                    <h4 className="title">Construction</h4>
                                    <p className="description">For more than three years, construction has been the essence of Cloud Homes Developers business. We have the resources and knowledge to undertake the job anywhere in India, with unmatched expertise. We're familiar with construction regulations and labor laws, and we have a proven record of working smoothly with government agencies and labor organizations. Over the years, we've followed many innovative construction techniques. Global, high-speed communications infrastructure keeps our personnel connected to tools, information, and each other. We're also innovators, having pioneered advances including 4D monitoring of our construction progress. We are not compelling the client to provide the basic requirements such as electrical connection, water source, site fencing.etc. Also we offer an unrivalled experience to our prospective clients by providing Turn-key method of finishing.</p>
                                </div>
                            </div>
                            <div className="col-md-12  wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" data-aos="zoom-out" >
                                <div className="box">
                                    <div className="icon"><i className="fa fa-pencil" style={{color:'#3fcdc7'}}></i></div>
                                    <h4 className="title">Project Management</h4>
                                    <p className="description">Project management ties together all activities on a project. A project may be well conceived and adequately financed, the contracts may be carefully drawn up, the contractors and workers highly experienced. But if all aspects of the project are not expertly integrated and managed, it may overrun the budget, fail to meet the schedule, or fall short in technical quality. With Cloud Homes’s project management tools, systems, and processes, we know how to manage all aspects of even the most complex project, from engineering and procurement to construction and completion. We also are experts at resolving conflicts and identifying issues before they become problems. Our teams focus on the overall picture, establishing priorities and coordinating activities and participants to ensure quality projects that are delivered safely, on time, and within budget.</p>
                                </div>
                            </div>
                            <div className="col-md-12 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" data-aos="zoom-out">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-circle" style={{color:'#41cf2e'}}></i></div>
                                    <h4 className="title">Engineering Standards</h4>
                                    <p className="description">We set high standards. We apply advanced technology, and we continually innovate and improve. We thrive on challenge and accomplishment.</p>
                                </div>
                            </div>
                            <div className="col-md-12  wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" data-aos="zoom-out">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-bars" style={{color: '#d6ff22'}}></i></div>
                                    <h4 className="title">Procurement</h4>
                                    <p className="description">By providing integrated, reliable, and cost-efficient supply chain management services, we help the clients who need to supply materials to the contractor at free of cost and ensure the success of projects large and small. Quality goods and services, at the right time, at the lowest cost, produced and delivered safely. That sums up Cloud Homes's approach to procurement, and we have the experience, the tools, and the know how to make it work.</p>
                                </div>
                            </div>
                            <div className="col-md-12 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" data-aos="zoom-out">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-industry" style={{color: '#4680ff'}}></i></div>
                                    <h4 className="title">Quality</h4>
                                    <p className="description">Our quality management systems continually assess our processes to enhance project outcome for our customers. Whether it's working on first-of-a-kind technical solutions or building in complex environments, we get the job done right. Within the completed years, customers have placed their confidence in Cloud Homes’s ability to manage large projects in which they have substantial investment.</p>
                                </div>
                            </div>
                            <div className="col-md-12  wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" data-aos="zoom-out">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-building" style={{color: '#d6ff22'}}></i></div>
                                    <h4 className="title">Safety</h4>
                                    <p className="description">Safety is a value that is fundamental to our culture. Cloud Homes has earned an industry-leading record of achieving zero lost-time incidents on projects. At Cloud Homes, we believe that every accident, and therefore every injury, is preventable, and we embed that philosophy into every project through a combination of technical field procedures and ongoing training programs. Every employee has stop-work authority—if it's not safe, don't do it. We also ask our subcontractors and partners to adopt our commitment to safety and health. The result is exceptional safety performance, even in hazardous work environments, severe weather, and remote locations.</p>
                                </div>
                            </div>
                            <div className="col-md-12 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s" data-aos="zoom-out">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-book" style={{color: 'red'}}></i></div>
                                    <h4 className="title">Commercial Marketing</h4>
                                    <p className="description">Commercial Marketing is the sale of products, spaces or services to end users as well as public and private companies. With a highly skilled Marketing division, Team Cloud Home's endeavor is to open the market for selling commercial spaces to retail as well as segments of varied industries, as per their requirements based on their business models.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services
