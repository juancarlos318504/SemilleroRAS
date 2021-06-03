import React from 'react';
import './CardMember.css'

const CardMember = (props) => {
    const {name, image, description, } = props;
    return (
        <div className="o-robot-card">
            <div className="o-bg-triangle-card-robot">
                <div className="o-bg-triangle-color"></div>
            </div>

            <div  className="o-robot-card-content">
                <div className="o-member-image-container"><img className="o-member-image" src={image} /></div>
                <div className="o-member-information">
                    <h3 className="o-member-title">{name}</h3>
                    <div className="o-member-description" dangerouslySetInnerHTML={{__html: description}}></div>
                </div>
            </div>
   
        </div>
    );
};

export default CardMember;