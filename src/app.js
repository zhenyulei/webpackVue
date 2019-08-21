/*入口文件，相当于路由文件*/
import React from 'react';
import {render} from 'react-dom';
import { HashRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

//路由文件
import Home from './pages/home';
import My from './pages/my';

render(
<HashRouter>
    <Provider store={store}>
    <div className="container">
        <Route path='/'  exact component={Home} />
        <Route path='/my' component={My} />
    </div>
    </Provider>
</HashRouter>, 
document.getElementById('root'));