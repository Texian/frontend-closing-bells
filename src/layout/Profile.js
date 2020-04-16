import React from 'react';
import ProfileAPI from '../api/ProfileAPI';

class Profile extends React.Component {
    state = {
        user: null
    };

    handleEdit = (user) => {
        ProfileAPI.update(user)
        .then(res => {
            this.setState({
                user: res.data
            });
        })
        .catch(err => `User edit error: ${err}`);
    }

    componentDidMount() {
        ProfileAPI.getOne()
        .then(res => {
            this.setState({
                user: res.data
            });
        })
        .catch(err => `User find error: ${err}`);
    }

    render(){ 
        let user = this.state.user;
        console.log(user);
        if (!user) {
            return (
                <p>Loading</p>
            );
        }

        return(
            <div className="profile">
                <div className="row">
                    <div className="col s12">
                        <div className="container">
                            <div className="section">
                                <div id="user-profile" className="section">
                                    <div className="row">
                                        <div className="col s12 m4 l3 user-section-negative-margin">
                                            <div className="row">
                                                <div className="col s12 center-align">
                                                    <img className="responsive-img circle z-depth-5" src="" alt="" width="120"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                <p className="m-0">Switch ID:</p>
                                                <p className="m-0">1234-5678-90</p> 
                                                </div>
                                            </div>
                                            <div className="row user-projects">
                                                <h6 className="col s12">Add New Record</h6>
                                                <div className="col s12">Turnips 500 bells 2/23/20</div>
                                                <span>
                                                    <button>+</button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col s12 m8 l6">
                                            <div className="row">
                                                <div id="feed" className="card user-card-negative-margin z-depth-0">
                                                    <div className="card-content card-border-gray">
                                                        <div className="row">
                                                            <div className="col s12">
                                                                <h5>{user.username}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-5">
                                                            <div className="col s11">
                                                                <div className="row">
                                                                    <div className="col s12">
                                                                        <div className="card card-border z-depth-2">
                                                                            <div className="card-image">
                                                                                <img src="" alt="" />
                                                                            </div>
                                                                            <div className="card-content">
                                                                                <h6 className="font-weight-900 text-uppercase">Turnips 500 bells</h6>
                                                                            </div>
                                                                        </div>
                                                                    <div className="social-icon">
                                                                        <span>
                                                                            <button>Edit</button>
                                                                            <button>Delete</button>
                                                                        </span>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr className="mt-5"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;