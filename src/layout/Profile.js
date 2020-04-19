import React from 'react';
import ProfileAPI from '../api/ProfileAPI';
import BellmarketContainer from '../containers/BellmarketContainer';
import User from '../components/User/User';
import '../components/Home/sprites.css';

class Profile extends React.Component {
    /* Original code
    state = {
        user: ''
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
*/

    componentDidMount() {
        ProfileAPI.getLoggedIn()
        .then(res => {
            this.setState({
                user: res.data
            });
        })
        .catch(err => console.log(`User find error: ${err}`));
    }

/* experimental code  */

            state = {
                isEditing: false,
                username: '',
                email: '',
                password: '',
                passwordVerify: '',
                avatar: '',
                switchId: ''
            }
            handleEdit = (user) => {
                ProfileAPI.update(user)
                .then(res => {
                    let users = this.state.users;
                    let userToUpdate = users.findIndex(user => user._id === res.data._id);
                    users[userToUpdate] = res.data;
                    this.setState({
                        users
                    })
                })
            }
            handleChange = (event) => {
                this.setState({
                    [event.target.name]: event.target.value
                })
            }
            submitEdit = (e) => {
                e.preventDefault();
                let userToUpdate = {
                    _id: this.state.user._id,
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    passwordVerify: this.state.passwordVerify,
                    avatar: this.state.avatar
                }
                this.props.handleEdit(userToUpdate);
                this.setState({
                    isEditing: !this.state.isEditing
                })
            }
/* End experimental code */

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
                    {/* Profile Card */}
                    <div className="col s12 m6 l6">
                        <div className="row">
                            <div id="feed" className="card user-card-negative-margin z-depth-0">
                                <div id="profile" className="card-content card-border-gray">
                                    {/* User information */}
                                    {
                                    this.state.isEditing &&
                                    <>
                                    <form onSubmit={this.submitEdit}>
                                        <label>Username:
                                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                                        </label>
                                        <br />
                                        <label>Email:
                                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                                        </label>
                                        <br />
                                        <label>Avatar:
                                            <input type="text" name="avatar" value={this.state.avatar} onChange={this.handleChange}/>
                                        </label>
                                        <label>Password:
                                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                                        </label>
                                        <br />
                                        <label>
                                            <input type="password" name="passwordVerify" value={this.state.passwordVerify} onChange={this.handleChange}/>
                                        </label>
                                        <a className="col s4 offset-s2 btn waves-effect waves-light gradient-45deg-red-pink mr-1 mb-1 border-round" style={{marginRight: "6px"}} onClick={this.handleEdit}>Cancel</a>
                                        <a className="btn-large waves-effect waves-light gradient-45deg-green-teal mr-1 mb-1 border-round">Submit</a>
                                    </form>
                                    </>
                                    }
                                    {
                                    !this.state.isEditing &&
                                    <>
                                    <div className="row">
                                        <div className="col s9">
                                            <h5>{this.state.user.username}</h5>
                                            <h6>{this.state.user.email}</h6>
                                            <h6>Switch ID: {this.state.user.switchId}</h6>
                                        </div>
                                        <div className="col s3 right-align">
                                            <img className="responsive-img circle z-depth-5" src="" alt="" height="128"/>
                                        </div>
                                    </div>
                                    <a className="col s2 offset-s10 btn-small waves-effect waves-light gradient-45deg-amber-amber mr-1 mb-1 border-round" onClick={this.handleEdit}>Edit</a>
                                    </>
                                    }
                                    {/* Add New Record */}
                                    <div className="row">
                                        <div className="row mt-5">
                                            <div className="col s12">
                                                <div className="row">
                                                    <div className="col s12">
                                                        <h5>Add New Record</h5>
                                                            <div className="card card-border z-depth-2">
                                                                <div className="card-content row center-align">
                                                                    <div className="col s4">
                                                                        <img className="itemSprite" id="shovelSprite" src={require("../img/ItemSpriteSheet.png")}/>
                                                                    </div>
                                                                    <form onSubmit={this.submitEdit}>
                                                                        <div className="col s6 offset-s6">
                                                                            <a className="dropdown-trigger btn waves-effect waves-light gradient-45deg-light-blue-cyan mr-1 mb-1 border-round" href="#" data-target='dropdown1'>Select</a>
                                                                            <h6 className="font-weight-900 text-uppercase">this.name</h6>
                                                                            <label>Price:
                                                                                <input type="text" name="price" value={this.state.price} onChange={this.handleChange}/>
                                                                            </label>
                                                                            <br />
                                                                            <label>Date:
                                                                                <input type="text" name="date" placeholder="YYYY-MM-DD" value={this.state.date} onChange={this.handleChange}/>
                                                                            </label>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{paddingBottom: "10px"}}> 
                                        <div className="col s3 offset-s1" >
                                            <a className="btn-large waves-effect waves-light gradient-45deg-green-teal mr-1 mb-1 border-round">Add</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* Sales History */}
                    <div className="card items col s12 m4 l4">
                        <h5 className="col s12">Sales History</h5>
                        <div className="col s12"><BellmarketContainer /></div>
                    </div>
                </div>
            </div>
        </div>
        )}
    }
}

export default Profile;