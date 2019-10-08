import React, { Component } from 'react'
import About from '../Images/about-2.png'
import About1 from '../Images/about-1.png'
import About2 from '../Images/about.png'
class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="about" id="about">
                    <div className="container">
                        <div className="section-heading my-5 text-center" data-aos="zoom-out">
                            <h1 className="About-title">About Us</h1>
                            <p className="lead mb-4" data-aos="zoom-out">Architects | Construction | Interior</p>
                            <p data-aos="zoom-out" style={{color:'#0f0f0f'}}>A crystallised dream had taken a stand three years ago,
                            where Ideas met Reality. An Avalanche of a Business goal was brewing in the mind of a young Entrepreneur
                            towards a Business Venture that would go on to be a reckoning in the future, by shaping the lives of a
                            culmination of Employees, their families and their Dreams. With sheer Gut Instinct and a fearless passion,
		                    a star was born – Cloud Homes Developers.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row align-items-lg-center">
                            <div className="col-12 col-md-6 text-center text-md-left" data-aos="fade-right">
                                <div className="section-heading">
                                    <h1>Who we are?</h1>
                                </div>
                                <p>We are one of the top architects and interior designers in Kannur who have done amazing projects
                                all across kerala for a huge variety of clients. All our services like architecture consulting and
                                interior designing are available in Kerala and Bangalore.We have a huge list of clients from all these Places.We have our branch office in Kannur Thalap.
                                Cloud Homes Developers in Kannur provide all sort of home interior designs and architect consulting that
                                cater to the taste,budget and other requirements of clients.You can either contact us at our office in
				                Kannur or you can reach us over phone.Our team is ready to serve you better. </p>
                            </div>
                            <div className="col-12 col-md-6" data-aos="fade-left">
                                <img src={About} className="img-fluid" alt="" ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about" id="about">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-12 col-md-6" data-aos="fade-right">
              <img className="img-fluid" src={About1} alt=""></img>
            </div>
            <div className="col-12 col-md-6 text-center text-md-left" data-aos="fade-left">
              <div className="section-heading">
                <h1>Vision</h1>
              </div>
                <p>"To consistently deliver eco-friendly world class finishes at each point of our designing, execute and complete all the projects in a manner to create an ambience that will echo the desires of our clients’ hearts. To accomplish the concepts of practical designs by breaking the boundaries of spacial or budget constraints, cherishing the thoughts of ‘Dream Home’ and creating a world which reflects the clients’ and help them to transcend their life style in harmony with nature."</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about" id="about">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-12 col-md-6 text-center text-md-left" data-aos="fade-right">
              <div className="section-heading">
                <h1>Mission</h1>
              </div>
                <p>"Our mission is to become the trailblazer with innovative designs and state of the art execution to work in accordance with the clients’ requirements and surpass their expectations in terms of quality, cost effectiveness and time management; to become the client’s first choice by creating an outstanding workmanship in work execution; to make the clients’ comfortable; we are to be loved than being understood. "</p>

            </div>
            <div className="col-12 col-md-6" data-aos="fade-left">
              <img className="img-fluid" src={About2} alt=""></img>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default AboutUs
