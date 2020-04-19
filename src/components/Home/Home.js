import React from 'react';
import './Home.css';
import './sprites.css';
import './ChartData.js';

const Home = () => {
    return(
        <div id="main">
            <div className="home row">
                <div className="col s12">
                    <div className="container">
                        <div className="section">
                            <div className="row vertical-modern-dashboard">
                                <h1>CLOSING BELLS</h1>
                                <div className="col s12 m12 l8">
                                    <div className="card animate fadeLeft">
                                        <div className="card-content row right-align">
                                            <img className="itemSprite" id="shovelSprite" src={require("../../img/ItemSpriteSheet.png")}/>
                                            <div className="justify-right">
                                                <h6 className="mb-0 mt-0 display-fex center-align justify-content-between">Current Price</h6>
                                                <h5 className="center-align">5000 bells</h5>
                                                <a className="dropdown-trigger btn-large waves-effect waves-light gradient-45deg-light-blue-cyan mr-1 mb-1 border-round hoverable" href="#" data-target='dropdown1'>Select</a>
                                            </div>
                                            <ul id="dropdown1" className="dropdown-content">
                                                <li><a href="#!">Shovel</a></li>
                                                <li><a href="#!">Tarantula</a></li>
                                                <li><a href="#!">Peach</a></li>
                                                <li><a href="#!">Seabass</a></li>
                                                <li><a href="#!">Net</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="animate fadeRight">
                                        <div className="card">
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
        </div>
    )
}

export default Home;