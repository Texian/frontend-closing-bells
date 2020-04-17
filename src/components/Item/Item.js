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
            <div className="item">
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
                        <button onClick={this.handleEdit}>Cancel</button>
                        <button type="submit">Submit</button>
                    </form>
                    </>
                }
                {
                    !this.state.isEditing &&
                    <>
                    <p>Name: {this.props.item.name}</p>
                    <p>Price: {this.props.item.price}</p>
                    <p>Date: {this.props.item.date}</p>
                    {this.props.item.image && <img src={this.props.item.image} alt={this.props.item.name}></img>}
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={() => this.props.handleDelete(this.props.item._id)}>Delete</button>
                    </>
                }
            </div>
        )
    }
}

export default Item;