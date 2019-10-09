import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div>
                        <div className="footer">
                            <div className="align col-lg-6 col-sm-6" data-aos="zoom-out">
                                <h3>Get in touch</h3>
                                <p>Cloud Homes Developers<br />
                                    4/121 Opp.Kalyan Sarees<br />
                                    Near Stadium Complex kannur<br />
                                    Contact: Jinson Johny +91-9747867892</p>
                                <p>Email:<a href="mailto:info@cloudhomesdevelopers.com" className="mailid"  ><b>info@cloudhomesdevelopers.com</b></a></p>
                                <ul>
                                    <li className="facebook"><a href="https://www.facebook.com/Cloud-Homes-Developers-115820349825003/?modal=admin_todo_tour" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li className="twitter"><a href="https://twitter.com/cloud_homes" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li className="call" ><a href="tel:919747867892" className="floatp" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone"></i></a></li>
                                    <li className="mail"><a href="mailto:info@cloudhomesdevelopers.com" className="floate" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-envelope my-floate"></i></a></li>
                                    <li className="Whatsapp"><a href="https://api.whatsapp.com/send?phone=919747867892&text=&source=&data=" className="floatw" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                                </ul>
                                <p>Copyright © 2019 Cloud Homes All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
                <div>
                    <div className="design-details">
                        <p>Designed and developed by <b> Vishnu KG Cherupuzha</b></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
