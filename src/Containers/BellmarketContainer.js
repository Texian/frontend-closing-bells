import React from 'react';
import ItemAPI from '../api/ItemAPI';
import Item from '../components/Item/Item';

class BellmarketContainer extends React.Component {
    state ={
        items: []
    }

    handleEdit = (item) => {
        ItemAPI.update(item)
        .then(res => {
            let items = this.state.items;
            let itemToUpdate = items.findIndex(item => item._id === res.data._id);
            items[itemToUpdate] = res.data;
            this.setState({
                items
            })
        })
    }

    handleDelete = (id) => {
        ItemAPI.deleteItem(id)
        .then(res => {
            let items = this.state.items.filter(item => {
                return item._id !==id;
            })
            this.setState({
                items
            })
        });
    }

    componentDidMount() {
        ItemAPI.index()
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    items: res.data
                })
            }
        })
        .catch(err => console.log(`Item index error: ${err}`));
    }

    render() {
        let items = this.state.items;

        return(
            <div className="container" style={{paddingBottom: "25px"}}>
                {items && items.map(item => {
                    return <Item item={item} key={item._id} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
                })}
                {!items &&
                <>
                <p>No items</p>
                </>
            }       
            </div>
        )
    }
}

export default BellmarketContainer;