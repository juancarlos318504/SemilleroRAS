import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route,Redirect  } from 'react-router-dom';
import Home from './Views/Home';
import AboutUs from './Views/AboutUs';
import Projects from './Views/Projects';
import ContactUs from './Views/ContactUs';
import GalleryRas from './Views/GalleryRas';
import Header from './Components/Header';
import Footer from "./Components/Footer";


import fetchData from './Services/Data';
import Store from './Services/Store'

class App extends Component {

  constructor(){
    super(); 
    this.state={
      display_button: true,
      display_triangles: true
    }
  }

  componentDidMount(){
    Store.dispatch(fetchData());
  }

  updateState =(display_button, display_triangles)=>{
    this.setState({
      display_button:display_button,
      display_triangles:display_triangles
    })
  }

  render(){

    return(
      <Router>
        <div className="App">
        <Header display={this.state.display_button} displayHeader={this.state.display_triangles}></Header>
          <Switch>
            <Route exact path="/" render={()=> <Home updateState={this.updateState}/>}/> 
            <Route exact path="/AboutUs" render={()=> <AboutUs updateState={this.updateState}/>}  />
            <Route exact path="/Projects" render={()=> <Projects updateState={this.updateState}/>} />
            <Route exact path="/Contact" render={()=> <ContactUs updateState={this.updateState}/>} />
            <Route exact path="/Gallery" render={()=> <GalleryRas updateState={this.updateState}/>} />
          </Switch> 
          <Footer></Footer>
        </div> 
      </Router>
    );
  } 
}

export default App;
