import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import Image from '../Images/1.jpg'
import Image1 from '../Images/2.jpg'
import Image2 from '../Images/3.jpg'
import Image3 from '../Images/4.jpg'
import Image4 from '../Images/5.jpg'
import Image5 from '../Images/6.jpg'
import Image6 from '../Images/7.jpg'
import Image7 from '../Images/8.jpg'
import Image8 from '../Images/9.jpg'
import Image9 from '../Images/10.jpg'
import Image10 from '../Images/11.jpg'
import Image11 from '../Images/12.jpg'
import Image12 from '../Images/13.jpg'
import Image13 from '../Images/14.jpg'
import Image14 from '../Images/15.jpg'
import Image15 from '../Images/16.jpg'
import Image16 from '../Images/17.jpg'
import Image17 from '../Images/18.jpg'
import Image18 from '../Images/19.jpg'
import Image19 from '../Images/20.jpg'
import Image20 from '../Images/21.jpg'
import Image21 from '../Images/22.jpg'
import Image22 from '../Images/23.jpg'
import Image23 from '../Images/24.jpg'
import Image24 from '../Images/25.jpg'
import Image25 from '../Images/26.jpg'
import Image26 from '../Images/27.jpg'
import Image27 from '../Images/28.jpg'
import Image28 from '../Images/29.jpg'
import Image29 from '../Images/30.jpg'
import Image30 from '../Images/31.jpeg'
import Image31 from '../Images/32.jpeg'
import Image32 from '../Images/33.jpeg'
import Image33 from '../Images/34.jpeg'
import Image34 from '../Images/35.jpeg'
import Image35 from '../Images/36.jpeg'
import Image36 from '../Images/37.jpeg'
import Image37 from '../Images/38.jpeg'
import Image38 from '../Images/39.jpeg'
import Image39 from '../Images/40.jpeg'
import Image40 from '../Images/41.jpeg'
import Image41 from '../Images/42.jpeg'
import Image42 from '../Images/43.jpeg'
import Image43 from '../Images/44.jpeg'
import Image44 from '../Images/45.jpeg'
const images = [
    require('../Images/1.jpg'),
    require('../Images/2.jpg'),
    require('../Images/3.jpg'),
    require('../Images/4.jpg'),
    require('../Images/5.jpg'),
    require('../Images/6.jpg'),
    require('../Images/7.jpg'),
    require('../Images/8.jpg'),
    require('../Images/9.jpg'),
    require('../Images/10.jpg'),
    require('../Images/11.jpg'),
    require('../Images/12.jpg'),
    require('../Images/13.jpg'),
    require('../Images/14.jpg'),
    require('../Images/15.jpg'),
    require('../Images/16.jpg'),
    require('../Images/17.jpg'),
    require('../Images/18.jpg'),
    require('../Images/19.jpg'),
    require('../Images/20.jpg'),
    require('../Images/21.jpg'),
    require('../Images/22.jpg'),
    require('../Images/23.jpg'),
    require('../Images/24.jpg'),
    require('../Images/25.jpg'),
    require('../Images/26.jpg'),
    require('../Images/27.jpg'),
    require('../Images/28.jpg'),
    require('../Images/29.jpg'),
    require('../Images/30.jpg'),
    require('../Images/31.jpeg'),
    require('../Images/32.jpeg'),
    require('../Images/33.jpeg'),
    require('../Images/34.jpeg'),
    require('../Images/35.jpeg'),
    require('../Images/36.jpeg'),
    require('../Images/37.jpeg'),
    require('../Images/38.jpeg'),
    require('../Images/39.jpeg'),
    require('../Images/40.jpeg'),
    require('../Images/41.jpeg'),
    require('../Images/42.jpeg'),
    require('../Images/43.jpeg'),
    require('../Images/44.jpeg'),
    require('../Images/45.jpeg'),
];
class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}

                <section id="services" className="section-bg">
                    <div className="container">
                        <div className="section-header" data-aos="zoom-in" >
                            <h3 > Our Portfolio</h3>
                            <p> “Good buildings come from good people,<br /> and all problems are solved by good design.”</p>
                        </div>
                        <div className="container">
                            <div className="row text-center text-white column">
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image1} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image2} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image3} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image4} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image5} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image6} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image7} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image8} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image9} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image10} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image11} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image12} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image13} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image14} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image15} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image16} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image17} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image18} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image19} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image20} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image21} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <a onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image22} alt=""></img></a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image23} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image24} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image25} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image26} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image27} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image28} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image29} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image30} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image31} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image32} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image33} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image34} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image35} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image36} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image37} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image38} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image39} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image40} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image41} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image42} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image43} alt=""></img></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4 mb-ms-0 menu-serv " data-aos="zoom-in">
                                    <div className=" service-page service-page1">
                                        <div onClick={() => this.setState({ isOpen: true })} data-lightbox="mygallery">
                                            <img className="img-fluid" src={Image44} alt=""></img></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Portfolio
