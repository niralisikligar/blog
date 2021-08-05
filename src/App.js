import React from 'react'
import "./App.css"
import {  Route,Switch } from 'react-router-dom';
import View from "./components/View"
import Blog from "./components/Blog"

const App = () =>{
   
  return (    
    <>
    
        <Switch>
            <Route exact path="/">
                <Blog  />
            </Route> 
            <Route exact path="/view/:id?">
                 <View />
             </Route> 
          
       
        </Switch>
   
    </>
  )
}

export default App;

