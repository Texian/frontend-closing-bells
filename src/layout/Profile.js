import React from 'react';
import ProfileAPI from '../api/ProfileAPI';
import BellmarketContainer from '../containers/BellmarketContainer';
import '../components/Home/sprites.css';

class Profile extends React.Component {
    state = {
        user: ''
    };

    handleEdit = (user) => {
        console.log(`Profile handleEdit user: ${user}`);
        ProfileAPI.update(user)
        .then(res => {
            this.setState({
                user: res.data
            });
        })
        .catch(err => `User edit error: ${err}`);
    }

    componentDidMount() {
        ProfileAPI.getLoggedIn()
        .then(res => {
            console.log(`CDM response: ${res.data.username}`);
            this.setState({
                user: res.data
            });
        })
        .catch(err => console.log(`User find error: ${err}`));
    }

    render(){ 
        if (!this.state.user) {
            return (
                <p>Loading</p>
            );
        }
        else {
        return(
        <div className="profile row">
            <div className="col s12">
                <div className="section">
                    <div className="col s12 m6 l6">
                        <div className="row">
                            <div id="feed" className="card user-card-negative-margin z-depth-0">
                                <div className="card-content card-border-gray">
                                    <div className="col s9">
                                        <h5>{this.state.user.username}</h5>
                                        <h6>{this.state.user.email}</h6>
                                        <h6>Switch ID: {this.state.user.switchId}</h6>
                                    </div>
                                    <div className="col s3 right-align">
                                        <img className="responsive-img circle z-depth-5" src="" alt="" height="128"/>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col s11">
                                            <div className="row">
                                                <div className="col s12">
                                                <h5>Add New Record</h5>
                                                    <div className="card card-border z-depth-2">
                                                        <div className="card-content center-align">
                                                            <div className="card-image">
                                                            <img className="itemSprite" id="shovelSprite" src={require("../img/ItemSpriteSheet.png")}/>
                                                            </div>
                                                            <button id="dropdown"><a className="center-align dropdown-trigger.btn" href="#" data-target='dropdown1'>Select an Item</a></button>
                                                            <h6 className="font-weight-900 text-uppercase">Turnips 500 bells</h6>
                                                        </div>
                                                    </div>
                                                <div className="social-icon">
                                                    <span>
                                                        <button>+</button>
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
                    <div className="col s12 m4 l4">
                        <h5 className="col s12">Record History</h5>
                        <div className="col s12"><BellmarketContainer /></div>
                    </div>
                </div>
            </div>
        </div>
        )}
    }
}

export default Profile;