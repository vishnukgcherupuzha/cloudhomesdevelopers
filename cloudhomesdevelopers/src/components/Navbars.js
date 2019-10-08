import React, { Component } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import {Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import image from '../Images/brand.png'
class Navbars extends Component {
    componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }
    render() {
        return (
            <div>
                 <Navbar variant="dark" expand="md" className="navbar" >
                    <Navbar.Brand>
                        <NavLink to ='/'><img src={image} className="img-fluid brand-size" alt=""></img></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto nav-item">
                            <NavLink exact to ='/' className="nav-link">HOME</NavLink>
                            <NavLink to ='/aboutus' className="nav-link">PROFILE</NavLink>
                            <NavLink to ='/portfolio' className="nav-link">PORTFOLIO</NavLink>
                            <NavLink to ='/services' className="nav-link">SERVICES</NavLink>
                            <NavLink to ='/contactus' className="nav-link">CONTACT US</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navbars
