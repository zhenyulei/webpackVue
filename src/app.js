import React from 'react';
import {render} from 'react-dom';
import Home from './pages/home';
import My from './pages/my';

import { HashRouter,Route } from 'react-router-dom';

render(
<HashRouter>
    <div className="container">
        <Route path='/'  exact component={Home} />
        <Route path='/my' component={My} />
    </div>
</HashRouter>, 
document.getElementById('root'));