import React from 'react';
import './Item.css';

class Item extends React.Component {
    state = {
        isEditing: false,
        name: this.props.item.name,
        price: this.props.item.price,
        date: this.props.item.date,
        image: this.props.item.image
    }

    handleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitEdit = (e) => {
        e.preventDefault();
        let itemToUpdate = {
            _id: this.props.item._id,
            name: this.props.item.name,
            price: this.props.item.price,
            date: this.props.item.date,
            image: this.props.item.image
        }
        this.props.handleEdit(itemToUpdate);
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        return(
            
            <div className="card item">
                {
                    this.state.isEditing &&
                    <>
                    <form onSubmit={this.submitEdit}>
                        <label>Name:
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </label>
                        <br />
                        <label>Price:
                            <input type="text" name="price" value={this.state.price} onChange={this.handleChange}/>
                        </label>
                        <br />
                        <label>Date:
                            <input type="text" name="date" value={this.state.date} onChange={this.handleChange}/>
                        </label>
                        <a className="col s4 btn waves-effect waves-light gradient-45deg-red-pink mr-1 mb-1 border-round" onClick={this.handleEdit}>Cancel</a>
                        <a className="btn waves-effect waves-light gradient-45deg-green-teal mr-1 mb-1 border-round" onClick={this.submitEdit}>Submit</a>
                    </form>
                    </>
                }
                {
                    !this.state.isEditing &&
                    <>
                    <div className="item row">
                        <div className="col s9">
                            <h5>{this.props.item.name}</h5>
                            <h6>{this.props.item.price} Bells</h6>
                            <h6>On: {this.props.item.date}</h6>
                        </div>
                        <div className="col s3 right-align">
                            <img className="responsive-img circle z-depth-5" src="" alt="" height="128"/>
                        </div>
                    </div>
                    <div className="row ">                        
                        <a className="col s4 offset-s2 btn waves-effect waves-light gradient-45deg-amber-amber mr-1 mb-1 border-round" onClick={this.handleEdit}>Edit</a>
                        <a className="col s4 btn waves-effect waves-light gradient-45deg-red-pink mr-1 mb-1 border-round" onClick={() => this.props.handleDelete(this.props.item._id)}>Delete</a>  
                    </div>
                    </>
                }
            </div>
        )
    }
}

export default Item;