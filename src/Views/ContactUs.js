import React, { Component } from "react";
import CardContact from "../Components/CardContact";
import './ContactUs.css';

class ContactUs extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.updateState("none" , "transparent");
    }

    render(){
        return (
            <div>              
                <div className="o-card-container">
                    <CardContact></CardContact>
                </div>
            </div>
        );
    }
    
}

export default ContactUs;