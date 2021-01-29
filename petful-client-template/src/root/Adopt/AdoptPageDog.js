import React, { useEffect, useState } from 'react';
import './Adoptpage.css';
import {Link} from 'react-router-dom'
import config from '../../config.js'

const AdoptPageDog = () => {
  //then display all -- then wait 5 seconds then remove person then get all if chosen name is not first name in the queue
  //if chosen name is first in the queue display the pet
  let start = false

  useEffect(() => {
    if(!start){
      fetch(`${config.API_URL}/people/`, {method: 'POST', body: JSON.stringify({name: this.props.name})} ).then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(getQueue)
      .catch(error => {
        console.error({ error })
      })
    }
    start = true
  })

  const getQueue = () => {
    fetch(`${config.API_URL}/people/`)
    .then(res => {
    if (!res.ok)
      return res.json().then(e => Promise.reject(e))
    return res.json()
  }).then((json)=>{
    setqueuePeople(json)
  })}
  
  const [queuePeople, setqueuePeople] = useState([])
  

    return(
          <div className="adopt">

                <div className="adopt-box">

                <div className="button-flex">
                <Link to={`/`}><button className="back">Home Page</button></Link>
                </div>

                <div className="user-queue">
                  <h3>Please Wait in the Queue</h3>
                  {this.props.name}
                  {queuePeople}
                </div>

                <div className="animal">
                  
                </div>

                </div>
          </div>
    )
  
}

export default AdoptPageDog;