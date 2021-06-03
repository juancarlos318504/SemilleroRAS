import React, { Component } from "react";
import Store from '../Services/Store'
import CardProject from '../Components/CardProject';
import './Projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PROJECTS:[]
        };

        Store.subscribe(()=>{
            this.setState({
                PROJECTS: Store.getState().PROJECTS
            })
        });
    }

    componentWillMount(){
        this.setState({
            PROJECTS: Store.getState().PROJECTS
        })
        this.props.updateState("none" , true);
    }

    render() {
        //console.log(this.state.PROJECTS)
        var projects = <div>Cargando Información</div>;
        if(this.state.PROJECTS.length>0){
            projects = 
            <div className="o-projects-container">
                {this.state.PROJECTS.map((project,i) => 
                <CardProject k={i} projecttitle={project.projecttitle} 
                    description={project.content.split("<p>")[1].split("</p>")[0]} 
                    image={project.content.split('src="',2)[1].split('" alt=')[0]} key={i}
                    date={project.date.split("T")[0]}>
                </CardProject>)}
            </div>
        }
        return (
            <div>               
                <div className="o-projects-container">
                    {projects}
                </div>
            </div>

        );
    }
}

export default Projects;