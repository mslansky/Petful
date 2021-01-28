import React from 'react';
import './Landingpage.css';

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
                    <input className="name" type="text" placeholder="Your Name"/>
                    <button className="start-dog">Dream dog!</button>
                    <button className="start-cat">Dream cat!</button>
                </div>
                </div>
                
    )
  }
}
