import React from 'react';
import { BrowserRouter,Route, Switch} from 'react-router-dom';

import Register from './pages/Register';
import Profile from './pages/Profile';
import Google from './pages/Google/googlemaps'


export default function Routes(){

return (

    <BrowserRouter>
    <Switch>

 
    <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile} />

    <Route path="/maps" component={Google} />



    </Switch>
    
    </BrowserRouter>

   );

}