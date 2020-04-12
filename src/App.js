import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./componenets/homepage";
import Beverages from "./componenets/beverages";
import Dairy from "./componenets/dairy";
import Grocery from "./componenets/grocery";
import Produce from "./componenets/produce";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            shoppingCart: []
        }
    }

    addToCart = (name, price, quantity) => {
        console.log(name + " " + price + " " + quantity)
        let item_obj = {
            name: name,
            price: price,
            quantity: quantity
        };
        let found = false

        this.state.shoppingCart.map((info) => {
            if (info.name === name) {
                info.quantity = quantity;
                found = true
            }
        })
        if (!found){
            this.state.shoppingCart.push(item_obj);
        }


        console.log(this.state.shoppingCart);

    }


    render() {
        return (
            <BrowserRouter>
                <div className={'App'}>
                    <Switch>
                        <Route path={'/'} exact render={
                            props => (
                                <Homepage {...props}/>
                            )
                        }
                        />

                        <Route path={'/beverages'} exact render={
                            props => (
                                <Beverages {...props} addToCart = {this.addToCart} shoppingCart = {this.state.shoppingCart}/>
                            )
                        }/>

                        <Route path={"/dairy"} exact render = {
                            props => (
                                <Dairy {...props} addToCart = {this.addToCart} shoppingCart = {this.state.shoppingCart}/>
                            )
                        }/>

                        <Route path={"/grocery"} exact render = {
                            props => (
                                <Grocery {...props} addToCart = {this.addToCart} shoppingCart = {this.state.shoppingCart}/>
                            )
                        }/>

                        <Route path={"/produce"} exact render = {
                            props => (
                                <Produce {...props} addToCart = {this.addToCart} shoppingCart = {this.state.shoppingCart}/>
                            )
                        }/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;