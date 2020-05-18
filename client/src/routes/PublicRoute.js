import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authenticationService from '../services/authentication'

class PublicRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      isAuthenticated: false
    }
  }

  async componentDidMount() {
    let result = await authenticationService.IsLoggedIn();
    this.setState({
      loading: false,
      isAuthenticated: result
    });
  }

  render() {
    const { component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={props =>
          !this.state.isAuthenticated ? (
            <Component {...props} />
          ) : (
              this.state.loading ? (
                <div>LOADING</div>
              ) : (
                  <Redirect to={{ pathname: '/' }} />
                )
            )
        }
      />
    )
  }
}
export default PublicRoute;