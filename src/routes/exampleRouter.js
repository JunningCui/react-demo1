import React from 'react';
import { Route } from 'react-router';
import * as containers from '../components/containers';
import loadAsyncWelcome from '../components/containers/AsyncWelcome.lazy';

export default (
    <Route path="/" component={ containers.ExampleLayout }>
        <Route path="welcome/:content" component={ containers.Welcome }/>
        <Route path="lazy" getComponent={ (nextState, cb) => loadAsyncWelcome(component => cb(null, component)) } />
        {/* other routes */}
    </Route>
);
