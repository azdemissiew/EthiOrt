import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route} from "react-router-dom";
import './App.css';
import shopPage from './pages/shop/shop.component';



function App() {
  return (
    <div>
      <switch>
    <Route exact path= '/' component={HomePage} />
    <Route path= '/shop' component={shopPage} />
    </switch>
    </div>
  );
}

export default App;
