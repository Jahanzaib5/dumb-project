import React , {Component} from 'react';
import './home.css';
import { Container, Row, Col } from "reactstrap";



export default class Home extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    <h1>Hello word</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}