import React from 'react'
import Adoptpage from './Adopt/Adoptpage'
import Landingpage from './Landing/Landingpage'
import './Root.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function Root() {
  return <div className="App">
     <Router>
        <Switch>

        <Route exact path="/">
            <Landingpage />
          </Route>
         
        <Route path='/Adopt/Adoptpage' component= {Adoptpage}/>


        </Switch>
      </Router>
  </div>
}

export default Root
