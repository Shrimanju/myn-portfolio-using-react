import React,{Component} from 'react';
import './Services.css'
class Services extends Component{
    render(){
    return(
        <div className="services">
        <h2>WHAT I CAN DO</h2>
        <div className="row">
        <div><span>  <ion-icon name="phone-portrait"></ion-icon> </span><h4>Developing</h4><p>Develop the s/w usin letest technologies</p></div> 
        <div><span> <ion-icon name="brush"></ion-icon>   </span><h4>Design</h4><p>frontend technologies and UI&UX</p></div> 
        <div><span>  <ion-icon name="thumbs-up"></ion-icon>  </span><h4>Favorited</h4><p>Best technologies for effective product</p></div> 
        <div><span>   <ion-icon name="help"></ion-icon> </span><h4>Problems</h4><p>Solving the complex problems</p></div> 


        </div>
        </div>
        );
    }
}
export default Services;