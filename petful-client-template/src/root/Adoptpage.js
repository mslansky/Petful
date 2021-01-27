import React from 'react';
import './Adoptpage.css';

export default class Adoptpage extends React.Component{
  render(){
    return(
          <div className="about">

                <div className="flex">
                <img className="pictures" src="https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="brown playful dog"/>
                <img className="pictures" src="https://images.unsplash.com/photo-1553499057-2e1b15f16f8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="tiny cat"/>
                <img className="pictures" src="https://images.unsplash.com/photo-1566241676013-f76b47985f0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80" alt="small white dog"/>
                </div>

                <div className="button-flex">
                <button className="back">Home Page</button>
                </div>


                <div className="user-queue">
                  <h3>Please Wait in the Queue</h3>
                </div>

          </div>
    )
  }
}