import React from 'react';
import ProfileAPI from '../../api/ProfileAPI';

class User extends React.Component {
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

    render() {
        return(
            <div className="row user">
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
                        <button onClick={this.handleEdit}>Cancel</button>
                        <button type="submit">Submit</button>
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
            </div>
        )
    }
}

export default User;