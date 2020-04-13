import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./componenets/homepage";
import Beverages from "./componenets/beverages";
import Dairy from "./componenets/dairy";
import Grocery from "./componenets/grocery";
import Produce from "./componenets/produce";
import Shoppingcart from "./componenets/shoppingcart";

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {data} from "./componenets/data/dummyData";


class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            inventory: []                                                                                                   //TODO: Different arrays for all categories
        }
        this.loadInventory()
    }

    addToCart = (name, price, quantity) => {
       
        this.state.inventory.map((info) => {
            if (info.name === name) {
                info.quantity = parseInt(quantity);

            }
        })
        localStorage.setItem("inventoryStorage", JSON.stringify(this.state.inventory) )
    }

    // addToCart = (name, price, quantity) => {
    //
    //     this.state.inventory.map((info) => {
    //         if (info.name === name) {
    //             info.quantity = quantity;
    //
    //         }
    //     })
    //     localStorage.setItem("inventoryStorage", JSON.stringify(this.state.inventory) )
    // }


    loadInventory = () => {

        if (localStorage.getItem("inventoryStorage") !== null){ //if data exists in localstorage, get quantity from there

            let item = {}
            let inventoryFromLocalStorage = JSON.parse(localStorage.getItem('inventoryStorage'))
            let originalData = data.split('\n');

            originalData.map((info) => {

                let nameOfItem = info.split(',')[0]
                let priceOfItem = info.split(',')[1]

                inventoryFromLocalStorage.map((inventoryData) => {
                    if(inventoryData.name === nameOfItem)
                    {
                        item = {
                            name: nameOfItem,
                            price: priceOfItem,
                            quantity: inventoryData.quantity
                        }
                    }

                }) //END LOCALSTORAGE FOR-EACH

                this.state.inventory.push(item);
            }) //END ORIGINALDATA FOR-EACH

        }

       else
           {
                let splittedData = data.split('\n');

                splittedData.map((info) => {

                    let item = {
                        name:info.split(',')[0],
                        price: parseFloat(info.split(',')[1]),
                        quantity: 0
                    };
                    this.state.inventory.push(item);

                })
            }
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
                                <Beverages {...props} addToCart = {this.addToCart} inventory = {this.state.inventory}/>
                            )
                        }/>

                        <Route path={"/dairy"} exact render = {
                            props => (
                                <Dairy {...props} addToCart = {this.addToCart} inventory = {this.state.inventory}/>
                            )
                        }/>

                        <Route path={"/grocery"} exact render = {
                            props => (
                                <Grocery {...props} addToCart = {this.addToCart} inventory = {this.state.inventory}/>
                            )
                        }/>

                        <Route path={"/produce"} exact render = {
                            props => (
                                <Produce {...props} addToCart = {this.addToCart} inventory = {this.state.inventory}/>
                            )
                        }/>

                        <Route path={"/cart"} exact render = {
                            props => (
                                <Shoppingcart {...props} addToCart = {this.addToCart} inventory = {this.state.inventory}/>
                            )
                        }/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;