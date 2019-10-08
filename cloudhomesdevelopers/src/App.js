import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Navbars from './components/Navbars'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Default from './components/Default'
function App() {
  return (
    <React.Fragment>
      <Navbars></Navbars>
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route path="/aboutus" component={AboutUs} ></Route>
        <Route path="/portfolio" component={Portfolio} ></Route>
        <Route path="/services" component={Services} ></Route>
        <Route path="/contactus" component={Contactus} ></Route>
        <Route component={Default}></Route>
      </Switch>
      <Footer></Footer> 
    </React.Fragment>
  );
}

export default App;
