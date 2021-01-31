import React, {useState} from 'react' 
import Landingpage from './Landing/Landingpage'
import './Root.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AdoptPageCat from './Adopt/AdoptPageCat';
import AdoptPageDog from './Adopt/AdoptPageDog';
import Congrats from './Congrats/congrats.js';


function Root() {
const [name,setName] = useState(null)

  return <div className="App">
     <Router>
        <Switch>

        <Route exact path="/">
            <Landingpage name={name} setName={setName} />
          </Route>
         
        <Route path='/Adopt/AdoptPageCat'>
          <AdoptPageCat name={name} />
          </Route> 

        <Route path='/Adopt/AdoptPageDog'>
          <AdoptPageDog name={name} />
        </Route> 

        <Route path='/congrats'>
          <Congrats/>
          </Route> 
       
        </Switch>
      </Router>
  </div>
}

export default Root
