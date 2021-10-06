import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Bags from './components/Bags/Bags';
 

const App = () => {

    return (
        <Router>
             <Navbar/>
            <Route path='/mybag' component={Bags} />
        </Router>
      
    );

}

export default App;