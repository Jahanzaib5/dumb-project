import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Wroks.css";
import dots from "./Dots.PNG";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import d1 from "./d1.png";
import d3 from "./d2.png";
import d2 from "./d3.png";
import d4 from "./d4.png";
import s1 from "./s1.jpg";
import s2 from "./s2.jpg";
import s3 from "./s3.jpg";

class Works extends Component {
    render() {
        return (
            <div>
                {/* How it works Portion */}
                <section class="section_gap how-it-works-section" id="how-it-works" style={{marginBottom:'5%'}}>                 
                    <div class="container">                     
                        <div class="row">
                            <div class="col-md-6 mb-4 mb-sm-auto">
                                <div class="position-relative pr-md-5">
                                    <img class="img-fluid" src="https://tutoria.pk/public/assets/assets-site/images/how_it_works.png" alt=""/>
                                    <a href="" data-target="#howItWorksModal" data-toggle="modal" class="play_icon"><img class="img-fluid" src="https://tutoria.pk/public/assets/assets-site/images/play_button.svg" alt=""/></a>
                                </div>
                            </div>
                            <div class="col-md-6 my-auto d-none d-sm-block">
                                <h2 class="title"><span class="text-purple">how it </span><span class="text-blue">works</span>
                                </h2>
                                <div class="mt-4">
                                    <div class="d-flex flex-column justify-content-center">
                                        <div class="mb-md-3">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <img src={icon1} alt="Icon" width="40" class="mr-3"/>
                                                </div>
                                                <h5 class="mb-0 text-blue">Create your account</h5>
                                            </div>
                                        </div>
                                        <div class="mb-md-3">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <img src={icon2} alt="Icon" width="40" class="mr-3"/>
                                                </div>
                                                <h5 class="mb-0 text-blue">Select your Courses</h5>
                                            </div>
                                        </div>
                                        <div class="mb-md-3">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <img src={icon3} alt="Icon" width="40" class="mr-3"/>
                                                </div>
                                                <h5 class="mb-0 text-blue">Start your free trail</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 {/* -------------X-------How it works Portion ---------X---------------*/}
                {/* -----------------------Information- Statistics ------------------------*/}
                <hr/>
                <section class="section_gap d-none d-sm-block" >
                    <div class="container">
                        <div class="row text-center" id="counter">
                            <div class="col-md-4">
                                <h1 class="text-blue display-4 " data-count="--">----</h1>
                                <h2 class="text-purple">students enrolled</h2>
                            </div>
                            <div class="col-md-4">
                                <h1 class="text-blue display-4" data-count="--">----</h1>
                                <h2 class="text-purple">courses covered</h2>
                            </div>
                            <div class="col-md-4">
                                <h1 class="text-blue display-4 " data-count="7">7</h1>
                                <h2 class="text-purple">days free trial</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>
                {/* ----------X-------------Information- Statistics ----------X--------------*/}
                {/*----------------------------- Why Chose DUMB Section ---------------------------- */}
                <section class="section_gap2" style={{marginTop:'8%'}}>
                    <div class="container">
                        <div class="row ">
                            <div class="col-md-12 ">
                                <h2 class="title"><span class="text-purple">why choose </span>
                                    <span class="text-blue">DUMB</span>
                                </h2>
                                <p class="h5 mt-4">
                                    tutoria is not just an e-learning platform, it is the gateway towards securing a
                                    brighter future for your academic and professional life.
                                </p>
                            </div>
                        </div>

                        <div class="row mt-4 feature-section">
                            <div class="col-md-6">
                                <div class="d-flex justify-content-between mb-3">
                                    <div class="mr-sm-5 mr-3">
                                        <img src={d1} class="img-fluid"/>
                                    </div>
                                    <div>
                                        <h4 class="card-title">learn with any device</h4>
                                        <p class="card-text">
                                            unlike traditional studying, you can now prepare for your exams even while
                                            on
                                            the go. through tutoria’s smart learning application, you get the best
                                            cross-platform experience on your smartphone, tablet, or laptop, right on
                                            your
                                            fingertips
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex justify-content-between mb-3">
                                    <div class="mr-sm-5 mr-3">
                                        <img src={d2} class="img-fluid"/>
                                    </div>
                                    <div>
                                        <h4 class="card-title">fastest support</h4>
                                        <p class="card-text">
                                            friendly and highly knowledgeable, our support team is always on the lookout
                                            to
                                            help you with anything that crosses your mind. our dedicated support team is
                                            available 24 hours a day and 7 days a week so you get your answers without
                                            losing a minute
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex justify-content-between mb-3">
                                    <div class="mr-sm-5 mr-3">
                                        <img src={d3} class="img-fluid"/>
                                    </div>
                                    <div>
                                        <h4 class="card-title">study at your own time</h4>
                                        <p class="card-text">
                                            every student has a unique learning curve based on their natural speed and
                                            need.
                                            tutoria gives you the ultimate independence of self-pacing your exam
                                            preparation, anytime around the clock, so studying for exams becomes a walk
                                            in
                                            the park
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex justify-content-between mb-3">
                                    <div class="mr-sm-5 mr-3">
                                        <img src={d4} class="img-fluid"/>
                                    </div>
                                    <div>
                                        <h4 class="card-title">certified teachers</h4>
                                        <p class="card-text">
                                            our study materials are the workmanship of Ph.D level subject specialists
                                            who
                                            thoroughly process and vet every aspect of the content. this rigorous
                                            testing
                                            helps us ensure the highest standard of quality and deliver the best
                                            academic
                                            value to you
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*-----------------X------------ Why Chose DUMB Section --------X-------------------- */}
                {/* -----------------Get Assistance--------------------------------- */}
                <section class="section_gap3" style={{margin:"6%"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-4 my-auto">
                                <img class="img-fluid" src= {dots}alt=""/>
                            </div>
                            <div class="col-lg-6 col-md-8 my-auto order-sm-first">
                                <h2 class="title2">
                                    <span class="text-blue">get</span>
                                    <span class="text-pink">free</span><br/>
                                    <span class="text-blue">assistance from our expert teachers</span>
                                </h2>
                                <div class="mt-sm-4">
                                    <a href="/#" class="btn btn-outline-pink">
                                        +996 -777 438 662
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>                
                {/* ---------X--------Get Assistan-----------X---------------------- */}
                {/* -----------------Words from  Mentors--------------------------------- */}
            {/* <div className="containerr">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={s1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={s2}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={s3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> */}
                
                {/* ---------X--------Words from Mentors-----------X---------------------- */}
                {/* -----------------Blogs--------------------------------- */}
                <section class="section_gap4" style={{marginBottom:"3%"}}>

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-5 my-auto">
                                <h2 class="title"><span class="text-purple">sign up </span><span class="text-pink">now!</span></h2>
                                <p class="h5 my-4">
                                    ready to get started? simply fill out this form to register for
                                    our exclusive seven-day free trial!
                                </p>
                            </div>
                            <div class="col-lg-6 col-md-7 my-auto">
                                <div class="card shadow border-0">
                                    <form method="POST" action="#" id="user_signupForm">
                                        <div class="card-body p-lg-5 p-4">
                                            <h5 class="card-title h3 text-blue mb-4">free trial</h5>
                                            <div class="card-text register">                                        
                                                <div class="form-group">
                                                    <input type="text" class="form-control bottom_bar" id="first_name" name="first_name" placeholder="First Name" required=""/>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control bottom_bar" id="user_mobile" name="user_mobile" minlength="11" maxlength="11" onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 &amp;&amp; event.charCode <= 57" placeholder="Phone Number" required=""/>
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" class="form-control bottom_bar" id="user_email" name="user_email" placeholder="Email" required=""/>
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control bottom_bar" id="password" name="password" minlength="6" maxlength="12" placeholder="Password" required=""/>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <button type="submit" class="btn btn-pink next">register</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
                {/* ---------X--------Blogs-----------X---------------------- */}

            </div>
        )
    }
}

export default Works;