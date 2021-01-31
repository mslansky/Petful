import React, { useEffect, useState } from 'react';
import './Adoptpage.css';
import {Link} from 'react-router-dom'
import config from '../../config.js'


const AdoptPageCat = (props) => {
  const [adoptable, setAdoptable] = useState(false);
  const [start, setStart] = useState(false);
  const [pet, setPet] = useState(null)
  const [queuePeople, setqueuePeople] = useState([])
  

  useEffect(() => {
    if(!start){
      fetch(`${config.API_URL}/people/`, {method: 'POST', headers: {
        'content-type': 'application/json'}, body: JSON.stringify({name: props.name})} ).then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(getQueue)
      .catch(error => {
        console.error({ error })
      })
    }
    setStart(true);
  })

  const getQueue = () => {
    fetch(`${config.API_URL}/people/`, {method:'GET', headers: {
      'content-type': 'application/json'}})
    .then(res => {
    if (!res.ok)
      return res.json().then(e => Promise.reject(e))
    return res.json()
  }).then((json)=>{
    setqueuePeople(json)
    getNextPerson();
  })}

  const getNextPerson = () => {
    fetch(`${config.API_URL}/people/next`, {method:'GET', headers: {
      'content-type': 'application/json'}})
    .then(res => {
    if (!res.ok)
      return res.json().then(e => Promise.reject(e))
    return res.json()
  }).then((json)=>{
    console.log(`Next in queue: ${json}`);
    if (json === undefined || json === null || json == "")
      return Promise.reject("No next person found")
    if(json === props.name){
      setAdoptable(true);
      displayPet();
    }else{
      displayPet();
      setTimeout(getQueue, 3000);
    }
  })}

  const displayPet = () => {
    fetch(`${config.API_URL}/pets/cats/next`, {method:'GET', headers: {
      'content-type': 'application/json'}})
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
  }).then((json)=>{
    setPet([json])

  })

  
}


  

    return(
          <div className="adopt">

                <div className="adopt-box">

                <div className="button-flex">
                <Link to={`/`}><button className="back">Home Page</button></Link>
                </div>

                <div className="user-queue">
                  <h3>Please Wait in the Queue</h3>
                  <div className="user-name">{queuePeople.map((x) => (<>{x}<br/></>))}</div>
                </div>

                <div className="animal">
                  {pet ? pet.map((pet) => (<Pet pet={pet} isToggleOn={adoptable}/>)) : "" }
                </div>

                </div>
          </div>
    )
  
}

const Pet = (props) => {
  const pet = props.pet;
  if(pet === null || pet === undefined){
    return "";
  }
  return (
    <div className="pet-box">
    {props.isToggleOn ? <p> Your Perfect Match!</p> : ""}
    {props.isToggleOn ? <Link to={`/congrats`}><button className="adoptButton" >Adopt me!</button></Link> : ""}
    <p>Name: {pet.name}</p>
    <p>Age: {pet.age}</p>
    <p>Breed: {pet.breed}</p>
    <p>Gender: {pet.gender}</p>
    <img src={pet.imageURL} alt={pet.description} className="animalImg"></img>
    <p>Desc: {pet.description}</p>
    <p>Story: {pet.story}</p>
    </div>
  );
}

export default AdoptPageCat;