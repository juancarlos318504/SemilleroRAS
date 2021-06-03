import React, { Component } from "react";
import Store from '../Services/Store'
import CardRobot from '../Components/CardRobot';
import CardNotice from '../Components/CardNotice';
import './Home.css';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ROBOTS : [],
            NOTICES: [],
        };

        Store.subscribe(()=>{
            this.setState({
                ROBOTS: Store.getState().ROBOTS,
                NOTICES: Store.getState().NOTICES
            })
        });
    }

    componentWillMount(){
        this.setState({
            ROBOTS: Store.getState().ROBOTS,
            NOTICES: Store.getState().NOTICES
        })
        this.props.updateState(true,true); //funcion que actualiza el estado en app para ocultar el boton y los triangulo del header
    }

    render() {

        var robots = <div>cargando información</div>
        var notices = <div>cargando información</div>

        if(this.state.ROBOTS.length>0){  //Verificar si los datos ya llegaron
            robots =
            <div className="o-robots-container">
                {this.state.ROBOTS.map((robot,i) => 
                <CardRobot key={i} robotname={robot.name} 
                    description={robot.content.split("<p>")[1].split("</p>")[0]} 
                    image={robot.content.split('src="',2)[1].split('" alt=')[0]} 
                    link={robot.content.split("<p><a href=\"")[1].split("</a></p>")[0]}>>
                </CardRobot>)}
            </div>
        }

        if(this.state.NOTICES.length>0){
            notices=
            <div className="o-notices-container">
                {this.state.NOTICES.map((notice,i) => 
                <CardNotice key={i} noticetitle={notice.noticetitle} 
                    description={notice.content.split("<p>")[1].split("</p>")[0]} 
                    image={notice.content.split('src="',2)[1].split('" alt=')[0]}
                    date={notice.date.split("T")[0]}>
                </CardNotice>)}
            </div>
        }

        return(
            <div>                
                <div className="o-content">
                    <section id="robots">
                        <h1 className="o-title">NUESTROS ROBOTS</h1>
                        {robots}
                    </section>

                    <section id="news" className="o-news">
                        <h1 className="o-title">NOTICIAS</h1>
                        {notices}
                    </section>
                </div>
            </div>
        );
        
    }

}

export default Home;