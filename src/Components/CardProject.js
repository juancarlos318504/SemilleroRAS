import React, { Component } from 'react';
import PopPop from 'react-poppop';
import PopupNotices from './PopupNotices';
import {popupStyle} from './popupStyle';
import './CardProject.css'
//hola
class CardProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }

    }

    toggleShow = () => {
        this.setState({show:!this.state.show});
    }

    render(){
        const { projecttitle, image, description, date } = this.props;
        return (
            <div className="o-project-card">
                <img className="o-project-image" src={image} />
                <div className="o-project-text">
                    <h3 className="o-project-title">{projecttitle}</h3>
                    <p className="o-project-description">{description}</p>
                    <button className="o-button-card" onClick={() => this.toggleShow()}>Ver más</button>
                </div>

                <PopPop
                    position="centerCenter"
                    open={this.state.show}
                    closeBtn={false}
                    closeOnEsc={true}
                    onClose={() => this.toggleShow()}
                    closeOnOverlay={true}
                    contentStyle={popupStyle}>

                    <PopupNotices noticetitle={projecttitle} description={description} image={image} close={this.toggleShow} date={date}/>
                </PopPop>
            </div>
        );
    }
    
};

export default CardProject;