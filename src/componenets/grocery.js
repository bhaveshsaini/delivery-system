import React, {Component} from 'react';
import "./styling/grocery.css"
import {data} from "./data/dummyData";

class Grocery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //newData: data.split('\n'),
        }
    }

    // Open and close sidebar
    w3_open = () => {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }

    w3_close = () => {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }

    searchbar = (res) => {
        let value  = res.target.value.toUpperCase()
        let searched = false;

        if(value !== '')
        {
            this.props.inventory.map((info) => {
                if(!info.name.toUpperCase().includes(value))
                {
                    document.getElementById(info.name).style.display = 'none'
                }
                else {
                    searched = true;
                    document.getElementById(info.name).style.display = 'table-row'

                }

            })

            if (searched){
                document.getElementById('originaldata').style.display = 'block'
                document.getElementById('noresults').style.display = 'none'
            }

            else {
                document.getElementById('originaldata').style.display = 'none'
                document.getElementById('noresults').style.display = 'block'
            }

        }

        if(value === '')
        {
            this.props.inventory.map((info) => document.getElementById(info.name).style.display = 'table-row')
            document.getElementById('originaldata').style.display = 'block'
            document.getElementById('noresults').style.display = 'none'
        }

    }

    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <body id={'bodyy'} className="w3-content">

                {/*sidebar menu*/}
                <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" id="mySidebar">

                    <div className="logodiv">
                        <i onClick={this.w3_close} className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
                        <img src="https://images.squarespace-cdn.com/content/57f2699fbe659461b9d87ce2/1523904360805-CKN6GSLHN6S0X1NBZN9Q/TT_NEW_LOGO_2017_F_NOGREY.png?format=1500w&content-type=image%2Fpng"/>
                    </div>

                    <div id={'firstdiv'} className="w3-padding-64 w3-large w3-text-grey">
                        <a onClick={() => this.props.history.push('/')} className="w3-bar-item w3-button">Home</a>
                        <a onClick={() => this.props.history.push('/produce')} className="w3-bar-item w3-button">Produce</a>
                        <a onClick={() => this.props.history.push('/beverages')} className="w3-bar-item w3-button">Beverages</a>
                        <a onClick={() => this.props.history.push('/grocery')} className="w3-bar-item w3-button">Grocery</a>
                        <a onClick={() => this.props.history.push('/dairy')} className="w3-bar-item w3-button">Dairy</a>
                    </div>

                </nav>

                {/*Top menu on small screens*/}
                <header id={'smallScreenHeader'} className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
                    <div className="w3-bar-item w3-padding-24 w3-wide ">TOP TOMATO</div>
                    <a href="javascript:void(0)"
                       className="w3-bar-item w3-button w3-padding-24 w3-right" onClick={this.w3_open}><i
                        className="fa fa-bars"></i></a>
                </header>

                {/*Overlay effect when opening sidebar on small screens*/}
                <div className="w3-overlay w3-hide-large" onClick={this.w3_close}
                     title="close side menu" id="myOverlay"></div>

                {/*PAGE CONTENT*/}
                <div className="w3-main">

                    {/*Push down content on small screens*/}
                    <div className="w3-hide-large"></div>

                    {/*top header*/}
                    <header className="w3-container w3-xlarge">
                        <p className="w3-right">
                            <i className="fa fa-shopping-cart w3-margin-right"></i>
                        </p>
                    </header>

                    <h1>Grocery</h1>
                    <div className={'searchbar'}>
                        <input onChange={this.searchbar} type="text" placeholder="Search for grocery items" name="search"/>
                    </div>

                    <div id={'originaldata'}>
                        <table>
                            <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                                    {this.props.inventory.map((info) =>
                                        <tr id={info.name}>
                                            <td>{info.name}</td>
                                            <td>${info.price}</td>
                                            <td id={'lastColumn'}>
                                                <form>                                                                                  
                                                    <input id={info.name + '1'} defaultValue={info.quantity} min={"0"} type={'number'} required/>
                                                    <button onClick={() => this.props.addToCart(info.name, info.price, document.getElementById(info.name + '1').value)} type={"button"}>
                                                        Add to Cart
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    )}  
                            </tbody>
                        </table>
                    </div>

                    <div id={'noresults'}>
                        <h1>No Results</h1>
                    </div>
                </div>
                </body>
            </div>
        );
    }
}

export default Grocery;