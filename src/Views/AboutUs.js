import React, { Component } from "react";
import Store from '../Services/Store';
import CardMember from '../Components/CardMember';
import universityLogo from '../Images/university.png';
import book from '../Images/open-book.png';
import mortarboard from '../Images/mortarboard.png';
import './AboutUs.css';


class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MEMBERS:[]
        };

        Store.subscribe(()=>{
            this.setState({
                MEMBERS: Store.getState().MEMBERS
            })
        });
    }

    componentWillMount(){
        this.setState({
            MEMBERS: Store.getState().MEMBERS
        })
        this.props.updateState("none" , true);
    }

    render() {
        //console.log(this.state)
        var members = <div>Cargando Información</div>;
        if(this.state.MEMBERS.length>0){
            members = 
            <div className="o-members-container">
                {this.state.MEMBERS.map((member,i) => 
                <CardMember key={i} name={member.name} 
                    description={member.content.split("<figure")[0]} 
                    image={member.content.split('src="',2)[1].split('" alt=')[0]} >
                </CardMember>)}
            </div>
        }

        return (
            <div>
                <div className="o-content">
                    <section className="o-about-us">
                        <div className="o-content-text">
                            <h1 className="o-title">QUIÉNES SOMOS</h1>
                            <p>El Semillero de Investigación en Robótica (SIR), adscrito al Grupo de Investigación en Sistemas de Telemando y Control Distribuido (GITCoD), es un equipo constituido por estudiantes y profesores apasionados por la robótica y su uso en la construcción de un mundo mejor. SIR tiene como centro de operaciones el Laboratorio de Robótica de la Universidad Autónoma de Occidente, un lugar en el que abordamos problemáticas relacionadas con la agricultura y la movilidad. En SIR construimos y usamos robots para transformar el mundo mientras nos divertimos!</p>
                        </div>

                        <div className="o-content-text">
                            <h1 className="o-title">MISIÓN</h1>
                            <p>Desarrollamos sistemas inteligentes que contribuyan en la solución de problemáticas urgentes de la sociedad colombiana, en particular en el sector agrícola y de transporte, a través de la aplicación de herramientas usadas a nivel internacional y el trabajo colectivo entre estudiantes, profesores e industria.</p>
                        </div>

                        <div className="o-content-text">
                            <h1 className="o-title">VISIÓN</h1>
                            <p>Ser un grupo de investigación estudiantil reconocido a nivel nacional e internacional por liderar procesos de transformación urbanos y rurales, usando tecnologías pioneras como la robótica y los sistemas inteligentes. Además, fomentaremos relaciones industria-universidad, logrando que nuestros proyectos sean en su mayoría financiados por entidades privadas y estatales.</p>
                        </div>
                    </section>

                    <section className="o-members">
                        <h1 className="o-title">ALGUNOS DE NUESTROS INTEGRANTES</h1>
                        {members}
                    </section>

                    <section className="o-join-us">
                        <h1 className="o-title">¿POR QUÉ UNIRTE AL SEMILLERO?</h1>
                        <div className="o-content-join-us">
                            <div className="o-join-text">
                                <img className="o-logo" src={mortarboard} alt="Universidad Autonoma de Occidente"></img>
                                <p>En el semillero de investigación estarás rodeado de personas dinámicas, abiertas, brillantes y colaborativas que tienen en mente el crecimiento humano, social y de aprendizaje en comunidad, por medio de los talentos y entusiasmo propio.</p>
                            </div>

                            <div className="o-join-text">
                                <img className="o-logo" src={universityLogo} alt="Universidad Autonoma de Occidente"></img>
                                <p>La universidad Autónoma de Occidente cuenta con laboratorios con equipamiento adecuado, herramientas de software para simulaciones o modelamientos que se requieran, recursos bibliográficos digitales, entre otros, con el fin de abastecer las necesidades que se presenten.</p></div>
                            <div className="o-join-text">
                                <img className="o-logo" src={book} alt="Universidad Autonoma de Occidente"></img>
                                <p>El semillero tiene dos intereses fundamentales los cuales son la agricultura y la movilidad. En la parte de movilidad hasta la fecha se está trabajando con carros autónomos, mientras que en el ámbito de la agricultura se trabaja en el monitoreo de cultivos y agricultura de precisión mediante el concepto de percepción robótica.</p>
                            </div>
                        </div>
                    </section>
                </div>
                
            </div>

        );
    }
}

export default AboutUs;