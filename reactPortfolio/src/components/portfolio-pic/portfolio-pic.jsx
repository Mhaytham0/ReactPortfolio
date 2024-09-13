import { Component } from "react";
import './portfolio-pic.css'
import Button from 'react-bootstrap/Button';

export default class PortfolioPic extends Component{
    constructor(){
        super();
        this.state ={
            fristName : "Mohamed",
            lastName : "Haytham",
            jobTitle : "React Devoloper",
        }
    }
    render(){
        return(
            <>
            <div className="pic">
            <div className="desc">
            <h1 className="name">{this.state.fristName} {this.state.lastName}</h1>
            <h3 className="jobTitle">{this.state.jobTitle}</h3>
            <Button variant="outline-light" size="lg">Get Started</Button>
            </div>
            </div>
            </>
        )
    }
}