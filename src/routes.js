// implemented from https://codepen.io/bradwestfall/project/editor/XWNWge?preview_height=50&open_file=src/app.js
// https://css-tricks.com/react-router-4/

import React from 'react';
import { BrowserRouter, Route, Switch, Link,Redirect } from 'react-router-dom';
import AuthorizedRoute from './AuthorizedRoute';
import UnauthorizedLayout from './Unauthorizedlayout'
import PrimaryLayout from './PrimaryLayout'


export default () => {
 return (
   <BrowserRouter>
       <Switch>
            <Route path="/auth" component={UnauthorizedLayout} />
            <AuthorizedRoute path="/app" component={PrimaryLayout} />
            <Redirect to="/auth" />
       </Switch>
   </BrowserRouter>
 )
}
