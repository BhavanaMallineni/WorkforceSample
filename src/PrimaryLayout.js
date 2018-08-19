import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';


const PrimaryLayout = ({ match }) => {
  return(<div className="primary-layout">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} render={(props) => <Login {...props} />} />
         <Route path={`${match.path}/home`} component={Home}/>
         <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>);
}
//<Route path={`${match.path}/messages`} component={Messages}/>
export default PrimaryLayout
