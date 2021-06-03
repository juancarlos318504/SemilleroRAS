import React, { Component } from 'react';
import PopPop from 'react-poppop';
import PopupNotices from './PopupNotices';
import {popupStyle} from './popupStyle';
import './CardNotice.css';

class CardNotice extends Component {
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
        const { noticetitle, image, description, date } = this.props;
        return (
            <div className="o-notice-card">
                <div className="o-image-notice-container">
                    <img className="o-notice-image" src={image} />
                    <div className="overlay"></div>
                </div>

                <div className="o-notice-text">
                    <h3 className="o-notice-title">{noticetitle}</h3>
                    <p className="o-notice-description">{description}</p>
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

                    <PopupNotices noticetitle={noticetitle} description={description} image={image} close={this.toggleShow} date={date}/>
                </PopPop>
            </div>
        );
    }
};

export default CardNotice;