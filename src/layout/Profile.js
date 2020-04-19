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
                                <div id="profile" className="card-content card-border-gray">
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
                                                <h5 className="justify-center">Add New Record</h5>
                                                    <div className="card card-border z-depth-2">
                                                        <div className="card-content row center-align">
                                                            <div className="col s4">
                                                                <img className="itemSprite" id="shovelSprite" src={require("../img/ItemSpriteSheet.png")}/>
                                                            </div>
                                                            <div className="col s6 offset-s7">
                                                                <a className="dropdown-trigger btn-large waves-effect waves-light gradient-45deg-light-blue-cyan mr-1 mb-1 border-round" href="#" data-target='dropdown1'>Select</a>
                                                                <h6 className="font-weight-900 text-uppercase">Turnips 500 bells</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <div className="social-icon">
                                                    <span>
                                                        <a className="btn-large waves-effect waves-light gradient-45deg-green-teal mr-1 mb-1 border-round">Add</a>
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
                    <div className="card items col s12 m4 l4">
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