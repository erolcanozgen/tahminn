import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authenticationService from '../services/authentication'

class RegistrationRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      user: {
        isAuthenticated:false,
        isFirstLogin:false
      }
    }
  }

  async componentDidMount() {
    let result = await authenticationService.IsLoggedIn();
    debugger;
    console.log(result);
    this.setState({
      user: result,
      loading: false,

    });
  }

  render() {
    const { component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={props =>
          this.state.user.isAuthenticated ? (
            this.state.user.isFirstLogin ? (
              <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/'}} />
              )
          ) : (
              this.state.loading ? (
                <div></div>
              ) : (
                  <Redirect to={{ pathname: '/login' }} />
                )
            )
        }
      />
    )
  }
}

export default RegistrationRoute;