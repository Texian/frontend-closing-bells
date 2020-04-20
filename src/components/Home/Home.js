import React from 'react';
import './Home.css';
import './sprites.css';
import './ChartData.js';
import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });


class Home extends React.Component {

    state = {
        itemSprite: 'nothing'
    }

    spriteSwap = (event) => {
        this.setState({
            itemSprite: event.target.name
        })
    }
    render() {
    return(
        <div>
            <div className="row">
                <div className="col s12">
                    <div className="container">
                        <div className="section">
                            <div className="row vertical-modern-dashboard center-align">
                                <h1 className="center-align">CLOSING BELLS</h1>
                                <div className="col s12 m12 l12">
                                    <div className="card animate fadeLeft" style={{zIndex: "10"}}>
                                        <div className="card-content row valign-wrapper">
                                            <div className="col s3">
                                                <img className={this.state.itemSprite} id="itemSpriteHome" src={require("../../img/ItemSpriteSheet.png")} />
                                            </div>
                                            <div className="col s6">
                                                <h4 className="mb-0 mt-0 display-fex center-align justify-content-between">Current Price</h4>
                                                <h5 className="center-align">{this.state.itemSprite} for this.price bells</h5>
                                            </div>
                                            <div className="col s3">
                                                <a className="dropdown-trigger btn-large waves-effect waves-light gradient-45deg-light-blue-cyan mr-1 mb-1 border-round hoverable" href="#" data-target='dropdown1'>Select</a>
                                            </div>
                                            <ul id="dropdown1" className="dropdown-content">
                                                <li><a name="shovel" onClick={this.spriteSwap}>Shovel</a></li>
                                                <li><a href="#!">Tarantula</a></li>
                                                <li><a href="#!">Peach</a></li>
                                                <li><a href="#!">Seabass</a></li>
                                                <li><a href="#!">Net</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card animate fadeRight" style={{zIndex: "1"}}>
                                        <div className="card-content">
                                            <h4 className="card-title mb-0">Price trend</h4>
                                            <div className="total-transaction-container">
                                                <div id="total-transaction-line-chart" className="total-transaction-shadow">
                                                <div id="chartdiv"></div>	
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

export default Home;