import React, { Component } from 'react';
import "./Wroks.css";


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
                                                    <img src="" alt="Icon" width="40" class="mr-3"/>
                                                </div>
                                                <h5 class="mb-0 text-blue">Create your account</h5>
                                            </div>
                                        </div>
                                        <div class="mb-md-3">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <img src="" alt="Icon" width="40" class="mr-3"/>
                                                </div>
                                                <h5 class="mb-0 text-blue">Select your Courses</h5>
                                            </div>
                                        </div>
                                        <div class="mb-md-3">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <img src="" alt="Icon" width="40" class="mr-3"/>
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
                <section class="section_gap d-none d-sm-block" id="pointer">
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

                <section class="section_gap2"  style={{marginTop:'5%', marginBottom:'2%'}}>
                    <div class="container">
                        <div class="row ">
                            <div class="col-md-12 ">
                                <h2 class="title"><span class="text-purple">why choose </span>
                                    <span class="text-blue">DUMB?</span>
                                </h2>
                                <p class="h5 mt-4">
                                    DUMB is not just an e-learning platform, it is the gateway towards securing a
                                    brighter future for your academic and professional life.
                                </p>
                            </div>
                        </div>

                        <div class="row mt-4 feature-section" >
                            <div class="col-md-6">
                                <div class="d-flex justify-content-between mb-3">
                                    <div class="mr-sm-5 mr-3">
                                        <img src="https://tutoria.pk/public/assets/assets-site/images/icon1.svg" class="img-fluid"/>
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
                                        <img src="https://tutoria.pk/public/assets/assets-site/images/fast_support.svg" class="img-fluid"/>
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
                                        <img src="https://tutoria.pk/public/assets/assets-site/images/own_time.svg" class="img-fluid"/>
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
                                        <img src="https://tutoria.pk/public/assets/assets-site/images/certified_teachers.svg" class="img-fluid"/>
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
                {/* -----------------Words from Mentors--------------------------------- */}
                
                {/* ---------X--------Words from Mentors-----------X---------------------- */}
            </div>
        )
    }
}

export default Works;
