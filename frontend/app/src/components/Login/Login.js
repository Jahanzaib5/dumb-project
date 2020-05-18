import React , {Component} from 'react'
import './login.css'
import {Nav, Image} from 'react-bootstrap'
import Img from "./img1.png"

class logIn extends Component{
    render() {
        return(
            <div className='container split'>
                <div className='box1 left'>
                    <div className='centerL' id='left'>
                        <div>
                            <p style={{fontSize: "30px", fontWeight:"large"}}>
                                Good to see you're back!
                            </p>
                            <p style={{fontSize: "20px"}}>
                                Login to enter your study mode
                            </p>
                        </div>
                        <div style={{color:"blueviolet"}}>
                            <form action="">
                                <div id='inputs'>
                                    <input type="text" placeholder='Name or Email'/><br/>
                                    <input type="password" placeholder='Password'/>
                                </div>
                                <div id='submit'>
                                    <button type="button">Submit</button>
                                    <Nav.Link href="#ForgotPassword">Forgot Password?</Nav.Link>
                                </div>
                            </form>
                        </div>
                        <div>
                            <p style={{display:"flex", alignItems:"baseline"}}>
                                Don't have an account?
                                <Nav.Link href="Register">Sign up</Nav.Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='box2 right'>
                    <div class='centerR' id="right">
                        <Image src= {Img} alt="photo"style={{maxWidth:"100%"}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default logIn;
