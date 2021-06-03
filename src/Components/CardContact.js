import React from 'react';
import './CardContact.css';
import Axios from 'axios';

class CardContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          phone:'',
          disabled:false,
          emailSent: null,
        }
      }

    handleChange = (event) =>{
      console.log();
      const target = event.target;
      const value= target.type ==='checkbox' ? target.checked : target.value;
      const name= target.name;
      console.log(target.checked);

      this.setState({
        [name]:value
      })
    }

    handleSubmit = (event)=>{
      event.preventDefault();
      this.setState({
        disabled:true,
        emailSent:false
      });

      //modificar para que funcione en el server
      Axios.post('http://localhost:3030/api/email', this.state)
        .then(res =>{
          if(res.data.success){ 
            this.setState({
            disabled:false,
            emailSent:true
          });
          } else {
            this.setState({
            disabled:false,
            emailSent:false
            });
         
          } 
      })
        .catch(err =>{
          this.setState({
            disabled:false,
            emailSent:false
          });
        })
    }
    
render(){
    return (
        <div className="o-card-contact">
            <div className="o-maps">
                <iframe src=
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.9845027153333!2d-76.52451468542328!3d3.3539359975585183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1bce83eb4eb%3A0x374b9a9955d030e8!2sUniversidad%20Aut%C3%B3noma%20De%20Occidente!5e0!3m2!1ses-419!2sco!4v1573921695662!5m2!1ses-419!2sco"  
                    frameborder="0"  allowfullscreen="">
                </iframe>
            </div>

            <div className="o-card-contact-text">
                <div className="o-card-content-text">
                    <div className="o-card-text">
                        <h2>UBICACIÓN</h2>
                        <p>Universidad Autónoma de Occidente Laboratorio SIR</p>
                    </div>

                    <div className="o-card-text">
                        <h2>EMAIL</h2>
                        <p>varomero@uao.edu.co</p>
                    </div>

                    <div className="o-card-text">
                        <h2>TELÉFONO</h2>
                        <p>+57 3188000  Ext. 11847</p>
                    </div>
                </div>

                <form  onSubmit={this.handleSubmit} className="o-form-contact">
                    <input name="name" type="text" placeholder="Nombre" value={this.state.name} onChange={this.handleChange}/>
                    <input name="email" type="email" placeholder="Correo electrónico" value={this.state.email} onChange={this.handleChange}/>
                    <input name="phone" type="text" placeholder="Teléfono" value={this.state.phone} onChange={this.handleChange}/>
                    <textarea name="message" placeholder="Mensaje" value={this.state.message} onChange={this.handleChange}></textarea>
                    <input name="submit"type="submit" value="ENVIAR" disabled={this.state.disabled} />
                    {this.state.emailSent=== true && <p> mensaje enviado</p>}
                    {this.state.emailSent=== false && <p> mensaje no enviado</p>}
                </form>
            </div>
        </div>);
 }

 
}

export default CardContact;