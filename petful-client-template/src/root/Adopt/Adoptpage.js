import React from 'react';
import './Adoptpage.css';
import {Link} from 'react-router-dom'

export default class Adoptpage extends React.Component{
  render(){
    return(
          <div className="adopt">

                <div className="adopt-box">

                <div className="button-flex">
                <Link to={`/`}><button className="back">Home Page</button></Link>
                </div>

                <div className="user-queue">
                  <h3>Please Wait in the Queue</h3>
                </div>

                <div className="animal">
                  
                </div>

                </div>
          </div>
    )
  }
}