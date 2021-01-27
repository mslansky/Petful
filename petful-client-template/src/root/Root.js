import React from 'react'
import Adoptpage from './Adoptpage'
import Landingpage from './Landingpage'
import './Root.css'


function Root() {
  return <div className="App">
     <Router>
        <Switch>

        <Route exact path="/">
            <Landingpage />
          </Route>
         
        <Route path='/Adoptpage' component= {Adoptpage}/>


        </Switch>
      </Router>
  </div>
}

export default Root
