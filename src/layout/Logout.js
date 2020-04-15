import React from 'react';
import ProfileAPI from '../api/ProfileAPI';

class Logout extends React.Component {
    state = {
        loggedIn: true
    }

    componentDidMount() {
        ProfileAPI.index()
            .then(res => {
                this.setState({
                    Profiles: res
                })
            })
    }

    logout = () => {
        ProfileAPI.logout()
        .then(res => {
            this.setState({
                loggedIn: false
            })
        })
    }

    render() {
        let Profiles = this.state.Profiles;

        return (
            <div>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
};

export default Logout;