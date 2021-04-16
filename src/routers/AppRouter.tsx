import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Homepage from '../pages/Homepage';
import Pokemon from '../pages/Pokemon';

const AppRouter: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/pokemon/:pokemonId' component={Pokemon}/>
        </Switch>
            </div>
            </div>
    );
  }
  
  export default AppRouter;
