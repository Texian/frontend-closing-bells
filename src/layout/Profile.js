import React from 'react';
import ProfileAPI from '../api/ProfileAPI';
import BellmarketContainer from '../layout/BellmarketContainer';
import '../components/Home/sprites.css';
import {Dropdown} from 'react-materialize';

class Profile extends React.Component {

    componentDidMount() {
        ProfileAPI.getLoggedIn()
        .then(res => {
            this.setState({
                user: res.data
            });
        })
        .catch(err => console.log(`User find error: ${err}`));  
    }

    state = {
        isEditing: false,
        _id: '',
        username: '',
        email: '',
        password: '',
        passwordVerify: '',
        avatar: '',
        switchId: '',
        itemSprite: 'nothing'
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

    spriteSwap = (event) => {
        this.setState({
            itemSprite: event.target.name
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
            username: this.state.user.username,
            email: this.state.user.email,
            password: this.state.user.password,
            passwordVerify: this.state.user.passwordVerify,
            avatar: this.state.user.avatar,
            switchId: this.state.user.switchId
        }
        this.props.handleEdit(userToUpdate);
        this.setState({
            isEditing: !this.state.isEditing
        })
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
                                                            <div className="card card-border" style={{zIndex: "10"}}>
                                                                <div className="card-content row">
                                                                    <div className="col s4" style={{paddingTop: "1px", paddingLeft: "1px"}} >
                                                                        <img className={this.state.itemSprite} id="itemSprite" src={require("../img/ItemSpriteSheet.png")}/>
                                                                    </div>
                                                                    <form onSubmit={this.submitEdit}>
                                                                        <div className="col s6 offset-s6">
                                                                            <Dropdown trigger={<a className="dropdown-trigger btn waves-effect waves-light gradient-45deg-light-blue-cyan mr-1 mb-1 border-round" href="#" data-target='dropdown1'>Select</a>}>
                                                                                <a name="shovel" onClick={this.spriteSwap}>Shovel</a>
                                                                                <a name="net" onClick={this.spriteSwap}>Net</a>
                                                                                <a name="tarantula" onClick={this.spriteSwap}>Tarantula</a>
                                                                                <a name="peach" onClick={this.spriteSwap}>Peach</a>
                                                                                <a name="lionfish" onClick={this.spriteSwap}>Lion Fish</a>
                                                                            </Dropdown>
                                                                            <h6 className="font-weight-900 text-uppercase">{this.state.itemSprite}</h6>
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