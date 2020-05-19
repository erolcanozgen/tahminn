import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authenticationService from '../services/authentication'

class PrivateRoute extends React.Component {
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
              <Redirect to={{ pathname: '/registration', state: { user: this.state.user, providerName: this.state.user.providerName } }} />
            ) : (
                <Component {...props} />
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

export default PrivateRoute;