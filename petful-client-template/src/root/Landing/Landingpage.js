import React from 'react';
import './Landingpage.css';
import {Link} from "react-router-dom";

export default class Landingpage extends React.Component{
  render(){
    return(
      <div className="landing">

                <div className="landing-box">
                <h1>Welcome to Sunshine Pets!</h1>
                <p>Our goal here is to match you with a pet who has been in our shelter the longest! 
                  First in first out as we like to say! Our pets are in high demand as they are the fluffiest, sweetest out there. Join the queue
                  and select your pet preference. We know there is a perfect fit for you out there, so let Sunshine Pets find it for you!
                </p>
                    <label className="enter">Enter the Queue:</label>
                    <input className="name" type="text" placeholder="Your Name" value={this.props.name} onChange={(evt) => this.props.setName(evt.target.value)}/>
                   <Link to="/Adopt/AdoptPageDog"><button className="start-dog">Dream dog!</button></Link> 
                    <Link to="/Adopt/AdoptPageCat"><button className="start-cat">Dream cat!</button></Link>
                </div>
                </div>
                
    )
  }
}
