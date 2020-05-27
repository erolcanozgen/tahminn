import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authenticationService from '../services/authentication'

class LayoutRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            user: {
                isAuthenticated: false,
                isFirstLogin: false
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
                render={props => {
                    return this.state.user.isFirstLogin ? (
                        <Redirect to={{ pathname: '/registration', state: { user: this.state.user, providerName: this.state.user.providerName } }} />
                    )
                        : (
                            this.state.loading ?
                                (
                                    <div></div>
                                ) : (
                                    <Component {...props} user={this.state.user} />
                                )
                        )
                }
                }
            />

        )
    }
}

export default LayoutRoute;