import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div id="main">
            <div className="home row">
                <div className="col s12">
                    <div className="container">
                        <div className="section">
                            <div className="row vertical-modern-dashboard">
                                <p>Home page</p>
                                <div className="col s12 m4 l4">
                                    <div className="card animate fadeLeft">
                                        <div className="card-content">
                                            <h6 className="mb-0 mt-0 display-fex justify-content-between">
                                                Current Price
                                            </h6>
                                            <div class="current-balance-container">Item image</div>
                                            <h5 className="center-align">5000 bells</h5>
                                            <p className="medium-small center-align">Item dropdown menu</p>
                                        </div>
                                    </div>
                                    <div className="col s12 m8 l8 animate fadeRight">
                                        <div className="card">
                                            <div className="card-content">
                                                <h4 className="card-title mb-0">Price trend</h4>
                                                <div className="total-transaction-container">
                                                    <div id="total-transaction-line-chart" className="total-transaction-shadow">SVG Line chart</div>
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