import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route} from "react-router-dom";
import './App.css';


const HatsPage =() => (
  <div>
<h1>HatsPage</h1>

  </div>
)

function App() {
  return (
    <div>
      <switch>
    <Route exact path= '/' component={HomePage} />
    <Route path= '/hats' component={HatsPage} />
    </switch>
    </div>
  );
}

export default App;
