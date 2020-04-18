import React, {Component} from 'react';
import "./styling/beverages.css"
import Sidebar from "./sidebar";

class Beverages extends Component {

    constructor(props) {
        super(props);

        this.state = {
           // newData: data.split('\n'),
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
                document.getElementById('originalTable').style.display = 'block'
                document.getElementById('noresults').style.display = 'none'
            }

            else {
                document.getElementById('originalTable').style.display = 'none'
                document.getElementById('noresults').style.display = 'block'
            }

        }

        if(value === '')
        {
            this.props.inventory.map((info) => document.getElementById(info.name).style.display = 'table-row')
            document.getElementById('originalTable').style.display = 'block'
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
                    <Sidebar history={this.props.history} choice={'beverages'}/>
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
                            <a onClick={() => this.props.history.push('/cart')} href={''}><i className="fa fa-shopping-cart w3-margin-right"> Cart</i></a>
                        </p>
                    </header>

                    <div id={'mainTableDIV'}>

                        <div className={'title'}>
                            <h1>Beverages</h1>
                        </div>

                        <div className={'searchbar'}>
                            <span className="glyphicon glyphicon-search"></span>
                            <input onChange={this.searchbar} type="text" placeholder="Search For Beverages" name="search"/>
                        </div>

                        <div id={'originalTable'} >
                            <div className={'row'}>
                                {this.props.inventory.map((info) =>
                                    <div id={info.name} className="col-md-3 col-sm-6">
                                        <div className="product-griid">
                                            <p>{info.name}</p>
                                            <p>${parseFloat(info.price).toFixed(2)}</p>
                                            <form>
                                                <input id={info.name + '1'} placeholder={'Quantity'} defaultValue={info.quantity !== 0 ? info.quantity : ''} min={"0"} type={'number'} required/>
                                                <button className={'addbtn btn btn-success'} onClick={() => this.props.addToCart(info.name, info.price, document.getElementById(info.name + '1').value)} type={"button"}>
                                                    Add To Cart
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
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

export default Beverages;