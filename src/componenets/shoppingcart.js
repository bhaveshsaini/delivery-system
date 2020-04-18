import React, {Component} from 'react';
import "./styling/shoppingcart.css"
import Sidebar from "./sidebar";

class Shoppingcart extends Component {                                                                                          //TODO: CALCULATE TAX AND UPDATE BUTTON

    constructor(props) {
        super(props);

        this.state = {
            shoppingCart: [],
            subTotal: 0,
            tax: 5
        }

        this.loadShoppingCart();
    }

    w3_open = () => {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }

    w3_close = () => {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }

    loadShoppingCart = () => {
        this.props.inventory.map((info) => {
            if (info.quantity > 0){
                this.state.shoppingCart.push(info);
                this.state.subTotal += info.price * info.quantity
            }
        })
    }

    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

                <body id={'bodyy'} className="w3-content">

                {/*sidebar menu*/}
                <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" id="mySidebar">
                    <Sidebar history={this.props.history}/>
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

                    <div id={'originaldata'}>

                                                                        {/*TABLE*/}
                        <div className="panel panel-info cs">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    <div className="row innerrow">
                                        <div className="col-xs-12 headingdiv">
                                            <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                            <span className={'buttonspan'}><button onClick={() =>
                                            {
                                                localStorage.clear()
                                                window.location.reload()
                                            }} className={'btn btn-danger'}>Remove all</button></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="panel-body">
                                {this.props.inventory.map((info) =>
                                    info.quantity > 0 ?
                                    <div id={info.name} className="row">
                                        <div className="col-xs-4 nigga">
                                            <h4 className="product-name"><strong>{info.name}</strong></h4>
                                        </div>

                                        <div className="col-xs-6">
                                            <div className="col-xs-6 text-right price">
                                                <h6><strong>${parseFloat(info.price).toFixed(2)} <span className="text-muted"></span></strong>
                                                </h6>
                                            </div>

                                            <div className="col-xs-4">
                                                <input id={info.name + '1'} defaultValue={info.quantity} type="text" className="form-control input-sm input"/>
                                            </div>

                                            <div className="col-xs-2 updatebtn">
                                                <button onClick={() =>
                                                {
                                                    this.props.addToCart(info.name, info.price, document.getElementById(info.name + '1').value)
                                                    window.location.reload()}}
                                                        type="button" className="btn btn-success ">
                                                    <span>Update </span>
                                                </button>

                                                <button onClick={
                                                    () => {
                                                        this.props.addToCart(info.name, info.price, 0)
                                                        window.location.reload()
                                                    }} className="btn btn-danger">Remove</button>
                                            </div>
                                        </div>
                                    </div> : ''
                                )}
                            </div>

                            <div className="panel-footer">
                                <div className="row text-center">
                                    <div className="col-xs-9">
                                        <h4 className="w3-left">
                                            Subtotal: <strong> ${this.state.subTotal.toFixed(2)}</strong><br/><br/>
                                            Tax: <strong> ${parseFloat(this.state.tax).toFixed(2)}</strong><br/><br/>
                                            Total: <strong>${parseFloat(this.state.subTotal + this.state.tax).toFixed(2)}</strong>
                                        </h4>
                                    </div>


                                    <div className="col-xs-3">
                                        <button onClick={() => this.props.checkout(this.state.shoppingCart)} type="button" className="btn btn-success w3-right">
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </body>
            </div>
        );
    }
}

export default Shoppingcart;


//               <table>
//                             <thead>
//                             <tr>
//                                 <th>Item Name</th>
//                                 <th>Price</th>
//                                 <th>Quantity</th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             {this.props.inventory.map((info) =>
//                                 info.quantity > 0 ?
//                                 <tr id={info.name}>
//                                     <td>{info.name}</td>
//                                     <td>${info.price}</td>
//                                     <td id={'lastColumn'}>
//                                         <form>
//                                             <input id={info.name + '1'} defaultValue={info.quantity} min={"0"} type={'number'} required/><br/>
//                                             <button
//                                                 onClick={() =>
//                                                 {
//                                                     this.props.addToCart(info.name, info.price, document.getElementById(info.name + '1').value)
//                                                     window.location.reload()
//                                                 }} type={"button"}>
//                                                 Update
//                                             </button>
//                                             <button onClick={
//                                                 () => {
//                                                     this.props.addToCart(info.name, info.price, 0)
//                                                     window.location.reload()
//                                                 }}
//                                              type={"button"}> Remove </button>
//                                         </form>
//                                    </td>
//                                 </tr> : ""
//                             )}
//                             </tbody>
//                             <tr id={'checkoutRow'}>
//                                 <td>
//                                     <h2><b>Subtotal: ${this.state.subTotal.toFixed(2)}</b></h2>
//                                 </td>
//                             </tr>
//                             <button onClick={() => this.props.checkout(this.state.shoppingCart)} id="btn">Continue to checkout</button>
//                         </table>