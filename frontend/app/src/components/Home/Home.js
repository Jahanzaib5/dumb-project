import React , {Component} from 'react';
import './home.css';
import { Container, Row, Col } from "reactstrap";
import pic1 from './1.PNG';
import pic2 from './img1.png';
import pic3 from "./pic1.JPG";
import logo1 from './elcart.png';
import logo2 from "./MP.png";
import Cards from "../Home/Cards/cards";
import logos from "./Logoss.png";
import HowIttWorks from "./HowItWorks/Works";


export default class Home extends Component{
    render(){

        return( 
          <React.Fragment>
            {/* The Side sticky icons */}
            <div class="sticky_icons d-none d-sm-block">
              <ul class="list-unstyled">
                  <li>Pay via</li>
                  <li class="pb-4">
                      <img width="50" alt="elcart logo" src={logo1}/>
                  </li>
                  <li class="pb-4">
                      <img width="50" alt="MegaPay logo" src={logo2}/>

                  </li>
                  <li>
                      <img width="50" alt="logo" src=""/>
                  </li>
              </ul>
            </div>
            {/* This is the end of Stikcy Icons */}


            {/* -------------The Main Banner ----------------------*/}
            <section class="banner-section mb-sm-5">

              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 col-md-8 my-auto">
                          <h1 class="title">Drive Ur <br/>Mind Bravely</h1>

                          <h3 class="text-primary font-nm mb-2 mb-sm-3">
                              Solve Problems &amp; build your Mind,<br></br> Work out &amp; Build Your Body
                          </h3>
                          <img width="400" class="img-fluid board-logos mb-3 imglogos" alt="Logos to be made and put" src={logos}/>
                          <div>
                              <a class="btn btn-banner d-none d-sm-inline-block" href="#">learn more</a>
                              <a class="btn btn-banner d-inline-block d-sm-none" href="#">free trial</a>
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-4 col-3 my-auto d-none d-sm-block">
                          <img class="img-fluid imgBanner" alt="Banner Image" src={pic1}/>
                      </div>
                  </div>
              </div>
          </section>
          {/*------------ End of Banner Section------- */}
          {/* -----------The Cards------------------------ */}
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                      <Cards name="Body" imgid={pic1}/>
                  </div>
                  <div className="col-md-4">
                      <Cards name="Mind" imgid={pic2}/>
                  </div>
                  <div className="col-md-4">
                      <Cards name="Soul" imgid={pic3}/>
                  </div>

              </div>
          </div>
          
          {/*-------------------- The End Three Cards---------------- */}
          {/* ---------------How it works Portion-------------------- */}
          <HowIttWorks />
          
          {/* ---------------How it works Portion-------------------- */}

          {/* ---------------Why Chose DUMB -------------------- */}

          













          {/* --------------------The end of why Chose DUMB--------------- */}









  


          </React.Fragment> 
        );
    }
}