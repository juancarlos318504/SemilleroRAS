import React, { Component } from "react";
import Store from '../Services/Store'
import Gallery from 'react-grid-gallery';
import './GalleryRas.css';

class GalleryRas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            GALLERY:[]
        };

        Store.subscribe(()=>{
            this.setState({
                GALLERY: Store.getState().GALLERY
            })
        });
    }  

    componentWillMount(){
        this.setState({
            GALLERY: Store.getState().GALLERY
        })
        this.props.updateState("none" , true);
    }    
  
    render() {
        console.log(Store.getState().GALLERY.length)
        var images = <div>Cargando Información</div>
        if(this.state.GALLERY.length>0){
            images = <Gallery images={this.state.GALLERY}/> 
        }

        return (
            <div>              
                <div className="o-gallery">
                    <div className="o-images">{images}</div>
                </div>
            </div>
        );  
    }
  }
  
  export default GalleryRas;