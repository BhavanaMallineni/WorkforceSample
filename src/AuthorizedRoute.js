import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { isUserLoggedIn, validateToken } from './actions/Auth';

class AuthorizedRoute extends React.Component {
  constructor(props){
      super(props);
  }

  componentDidMount() {
    //this.props.dispatch(isUserLoggedIn());
  }

  render() {
    const { component: Component, ...rest } = this.props
      //if (pending) return <div>Loading...</div>
    /*  this.props.dispatch(validateToken());// make a service call to verify valid token-session
      if(!this.props.logged){
        window.localStorage.removeItem("isUserLoggedIn");
        window.localStorage.removeItem("userLoginToken");
      }
      const loggedIn = (window.localStorage.isUserLoggedIn !== undefined &&
                        window.localStorage.isUserLoggedIn === "true" &&
                        this.props.logged &&
                        this.props.isValidToken);*/
                        const loggedIn = true;
    return (
      <Route {...rest} render={props => {
        return loggedIn
          ? <Component {...props} />
          : <Redirect to="/auth/login" />
      }} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
            pending: state.auth.pending,
            logged: state.auth.logged,
            isValidToken : state.auth.isValidToken
          }
}

export default connect(mapStateToProps)(AuthorizedRoute)
